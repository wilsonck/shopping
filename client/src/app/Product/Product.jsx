import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Filter from '../../components/Filter/Filter';
import CardProduct from '../../components/CardProduct/CardProduct';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../../store/products/actions';
import { fetchBrands } from '../../store/brands/actions';

import classes from "./Product.module.scss";

class Product extends Component{

    async componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchBrands();
    }

    sortProductsByPrice = (sortType) =>  {
        this.props.fetchProducts( { orderPrice: sortType });
    } 

    sortProductsByBrand = (brandId) => {
        this.props.fetchProducts( { brandId });
    }

    render() {

        const { 
            products, 
            brands 
        } = this.props;

        return(
            <Fragment>
                <Header />
                <Container>
                    <Filter 
                        optionsBrands={brands}
                        sortProductsByPrice={this.sortProductsByPrice}
                        sortProductsByBrand={this.sortProductsByBrand}
                    />
                    <ul className={classes.ProductList}>
                        {products.map((prod, index) => {
                            return (
                                <li key={`prod-${index}`} className={classes.ProductList__item}>
                                    <CardProduct 
                                        productName={prod.subtitle}
                                        regularPrice={prod.price}
                                        discountPrice={prod.priceDiscounted}
                                        brandName={prod.brand}
                                    />
                                </li>
                            );
                    })}
                   </ul>
                   <Pagination />
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

const mapStateToProps = ({
    productsReducer: { products },
    brandsReducer: { brands }
}) => {
    return {
        products,
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