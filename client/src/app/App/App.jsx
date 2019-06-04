import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Product from '../Product/Product';import CardProduct from '../../components/CardProduct/CardProduct';import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBag, addProductCart, removeProductToCart } from '../../store/bag/actions';
import { fetchBrands } from '../../store/brands/actions';

class App extends Component{

    async componentDidMount() {
        this.props.fetchBag();
    }

    /**
     * Handle the add Cart
      * @param {idProduct}  IdProduct to add in the cart
     */
    addToCart = async (idProduct) => {
        try {
            await this.props.addProductCart(idProduct);
        } catch (error) {
            console.error(error);
        }
    }

     /**
     * Handle the add Cart
      * @param {idProduct}  IdProduct to add in the cart
     */
    removeToCart = async (idProduct) => {
        try {
            await this.props.removeProductToCart(idProduct);
        } catch (error) {
            console.error(error);
        }
    }

    addToWishList = (idProduct) => {
        console.log("addWidhList --> ", idProduct);
    }
    

    render() {

        const { bag } = this.props;

        return (
            <Fragment>
                <Header 
                    bagData={bag}
                    removeToCart={this.removeToCart}
                />
                <Container>
                    <Product 
                        addToCart={this.addToCart}
                        addToWishList={this.addToWishList}
                    />
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

const mapStateToProps = ({
    bagReducer: { bag },
    brandsReducer: { brands }
}) => {
    return {
        bag,
        brands
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchBag,
        addProductCart,
        removeProductToCart,
        fetchBrands
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);