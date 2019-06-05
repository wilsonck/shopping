import React, { Component } from 'react';
import Filter from '../../components/Filter/Filter';
import CardProduct from '../../components/CardProduct/CardProduct';
import Pagination from '../../components/Pagination/Pagination';
import ConfigPagination from "../../config/pagination";

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../../store/products/actions';
import { fetchBrands } from '../../store/brands/actions';

import classes from "./Product.module.scss";

const STRING_DEFAULT_OPTION = "DEFAULT_VALUE";

class Product extends Component{

    state = {
        currentPage: 1,
        orderPrice: null,
        brandId: null,
    }

    async componentDidMount() {
        this.getProducts(this.state.currentPage);
        this.props.fetchBrands();
    }

    /**
     * Build the query to search page products, is possible combine more one filter, brand with price
     */
    buildWhere = () => {
        let where = {};
        if (this.state.orderPrice){
            where.orderPrice = this.state.orderPrice;
        }
        if (this.state.brandId){
            where.brandId = this.state.brandId;
        }
        where.page = this.state.currentPage;
        where.page_size = ConfigPagination.ItensPerPage;
        return where;
    }

    /**
     * Fetch the  request Products
     */
    getProducts = () => {
        const _where = this.buildWhere();
        this.props.fetchProducts( _where );
    }

    /**
     * Call the Fetch the products sort by Price
     */
    sortProductsByPrice = async (sortType) =>  {
        const valueOrderPrice = sortType === STRING_DEFAULT_OPTION ? null : sortType;
        await this.setCurrentPage(1);
        await this.setState({
            orderPrice: valueOrderPrice
        });
        this.getProducts();
    } 

    /**
     * Call the Fetch the products sort by Brand
     */
    sortProductsByBrand =  async (brandId) => {
        const valueBrandId = brandId === STRING_DEFAULT_OPTION ? null : brandId;
        await this.setCurrentPage(1);
        await this.setState({
            brandId: valueBrandId
        });
        this.getProducts();
    }

    /**
     * Set the current page in the state
     */
    setCurrentPage = async (page) => {
        await this.setState({
            currentPage: page
        });
    }

    /**
     * Handle the change page in pagination 
     */
    changePage = async (pageId) => {
        await this.setCurrentPage(pageId);
        this.getProducts();
    }

    /**
     * Received a productId and check if this product there is in the bag, if there is return true else false
     */
    isProductInTheBag = (productId) => {
        return this.props.bag.products.some(prod => prod.productId === productId);
    }

    /**
     * Received a productId and check if this product there is in the WishList, if there is return true else false
     */
    isProductInWishList = (productId) => {
        return this.props.wishList.some(prod => prod.productId === productId);
    }

    /**
     * Return all products render and check if the search return any products, we show a warning 
     */
    renderProducts = (products) => {

        const { 
            addToCart, 
            addToWishList
        } = this.props;

        if (products.length === 0 ){
            return (<div className={classes.NoResults} > No results to Show. </div>); 
        }

        return products.map((prod, index) => {
            return (
                <li 
                    key={`prod-${index}`} 
                    className={classes.ProductList__item} >
                        <CardProduct
                            productId={prod.id}
                            productImage={prod.image}
                            addToCart={addToCart}
                            addToWishList={addToWishList}
                            productName={prod.subtitle}
                            regularPrice={prod.price}
                            discountPrice={prod.priceDiscounted}
                            brandName={prod.brand}
                            isIntheCart={this.isProductInTheBag(prod.id)}
                            isInWishList={this.isProductInWishList(prod.id)}
                        />
                </li>
            );
        })
    }

    render() {

        const { 
            products, 
            brands,
            meta
        } = this.props;


        return(
            <div className={classes.Product}>
                <Filter 
                    optionsBrands={brands}
                    sortProductsByPrice={this.sortProductsByPrice}
                    sortProductsByBrand={this.sortProductsByBrand}
                />
                <ul className={classes.ProductList}>
                    {this.renderProducts(products)}
                </ul>
                <Pagination 
                    itensPerPage={ConfigPagination.ItensPerPage}
                    totalItens={meta}
                    currentPage={ this.state.currentPage}
                    changePage={this.changePage}/>
            </div>
        );
    }
}

const mapStateToProps = ({
    productsReducer: { products, meta },
    brandsReducer: { brands },
    bagReducer: { bag },
    wishListReducer: { wishList }
}) => {
    return {
        products,
        meta,
        brands,
        bag,
        wishList
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchProducts,
        fetchBrands
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);