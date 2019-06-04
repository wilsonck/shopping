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

class Product extends Component{

    state = {
        currentPage: 1
    }

    async componentDidMount() {
        this.getProducts(this.state.currentPage);
        this.props.fetchBrands();
    }

    getProducts = (currentPage) => {
        const pagination = {
            "page": currentPage, 
            "page_size": ConfigPagination.ItensPerPage
        }
        console.log(currentPage);
        this.props.fetchProducts( pagination );
    }

    /**
     * Call the Fetch the products sort by Price
     */
    sortProductsByPrice = (sortType) =>  {
        this.props.fetchProducts( { orderPrice: sortType });
    } 

    /**
     * Call the Fetch the products sort by Brand
     */
    sortProductsByBrand = (brandId) => {
        this.props.fetchProducts( { brandId });
    }

    /**
     * Handle the change page in pagination 
     */
    changePage = (pageId) => {
        this.setState({
            currentPage: pageId
        });
        this.getProducts(pageId);
        console.log("fetch page: ", pageId);
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
                    changePage={this.changePage}/>
            </div>
        );
    }
}

const mapStateToProps = ({
    productsReducer: { products, meta },
    brandsReducer: { brands }
}) => {
    return {
        products,
        meta,
        brands
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchProducts,
        fetchBrands
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);