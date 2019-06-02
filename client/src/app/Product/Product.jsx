import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Filter from '../../components/Filter/Filter';
import CardProduct from '../../components/CardProduct/CardProduct';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';

import classes from "./Product.module.scss";

class Product extends Component{
    render() {
        return(
            <Fragment>
                <Header />
                <Container>
                    <Filter />

                    <ul className={classes.ProductList}>
                        <li className={classes.ProductList__item}>
                            <CardProduct />
                        </li>

                        <li className={classes.ProductList__item}>
                            <CardProduct />
                        </li>
                    </ul>

                    <Pagination />
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

export default Product;
