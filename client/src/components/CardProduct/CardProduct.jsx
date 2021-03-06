import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as WishListIcon } from '../../assets/svg/wishlist.svg';
import Price from "../Price/Price";
import Button from "../Button/Button";

import { getClassesToApply } from '../../helpers/formatter/Classes';

import classes from './CardProduct.module.scss';

function CardProduct({
    productId,
    brandName,
    productImage,
    productName,
    regularPrice,
    discountPrice,
    isIntheCart,
    isInWishList,
    addToCart,
    addToWishList
}) {

    const labelInTheCart = isIntheCart ? "In Cart" : "Add to Cart";
    const classBtnCart = isIntheCart ? classes.ButtonInCart : "";

    const classBtninWishList = isInWishList ? getClassesToApply(classes.WishlistButton, classes.ButtonInWishList) : classes.WishlistButton;

    return (
        <article className={classes.Product} itemScope itemType="http://schema.org/Product">
            <figure className={classes.Figure}>
                <img className={classes.Product__image} src={productImage} alt="Product" itemProp="image"/>
                    <Button
                        className={classBtninWishList}
                        disabled={isInWishList}
                        onClick={() => addToWishList(productId)}>
                        <WishListIcon className={classes.Icon} />
                    </Button>
            </figure>
            <div className={classes.Product__details}>
                <h1 className={classes.Product__title} itemProp="brand">{brandName}</h1>
                <p className={classes.Product__subtitle} itemProp="description">{productName}</p>
                <Price
                    regularPrice={regularPrice}
                    discountPrice={discountPrice}
                />
                <Button
                    className={classBtnCart}
                    disabled={isIntheCart}
                    onClick={() => addToCart(productId)}>
                    {labelInTheCart}
                </Button>
            </div>
        </article>
    );
}

CardProduct.propTypes = {
    productId: PropTypes.string,
    brandName: PropTypes.string,
    productImage: PropTypes.string,
    productName: PropTypes.string,
    regularPrice: PropTypes.string,
    discountPrice: PropTypes.string,
    isIntheCart: PropTypes.bool,
    isInWishList: PropTypes.bool,
    addToCart: PropTypes.func,
    addToWishList: PropTypes.func
};

CardProduct.defaultProps = {
    isIntheCart: false,
    isInWishList: false,
    addToCart: () => {},
    addToWishList: () => {}
};

export default CardProduct;