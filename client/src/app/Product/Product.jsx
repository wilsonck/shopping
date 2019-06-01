import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';

class Product extends Component{
    render() {
        return(
            <Fragment>
                <Header />
                <Container>
                    <Filter />
                    <Pagination />
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

export default Product;
