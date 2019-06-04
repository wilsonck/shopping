import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Product from '../Product/Product';
import Footer from '../../components/Footer/Footer';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWishList, addProductWishList, removeProductToWishList } from '../../store/wishList/actions';
import { fetchBag, addProductCart, removeProductToCart } from '../../store/bag/actions';

class App extends Component{

    async componentDidMount() {
        const {
            fetchBag,
            fetchWishList
        } = this.props;

        fetchBag();
        fetchWishList();
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

    /**
     * Handle the add Cart
      * @param {idProduct}  IdProduct to add in the cart
     */
    removeToWishList = async (idProduct) => {
        try {
            await this.props.removeProductToWishList(idProduct);
        } catch (error) {
            console.error(error);
        }
    }

    addToWishList = async (idProduct) => {
        try {
            await this.props.addProductWishList(idProduct);
        } catch (error) {
            console.error(error);
        }
    }
    

    render() {

        const { bag, wishList } = this.props;

        return (
            <Fragment>
                <Header 
                    bagData={bag}
                    wishListData={wishList}
                    removeToCart={this.removeToCart}
                    removeToWishList={this.removeToWishList}
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
    wishListReducer: { wishList }
}) => {
    return {
        bag,
        wishList
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchBag,
        addProductCart,
        removeProductToCart,
        fetchWishList,
        addProductWishList,
        removeProductToWishList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);