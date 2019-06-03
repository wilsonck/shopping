import React from 'react';
// import PropTypes from 'prop-types';

import { ReactComponent as WishListIcon } from '../../assets/svg/wishlist.svg';

import classes from './CardProduct.module.scss';

function CardProduct({
    brandName,
    productName,
    regularPrice,
    DiscountPrice,
    isIntheCart,

}) {

    return (

        <article className={classes.Product} itemScope itemType="http://schema.org/Product">
            <figure className={classes.product__imageWrapper}>
                <img className={classes.Product__image} src="assets/images/img01.png" alt="Product" itemProp="image"/>
                <button className="product__wishlist-button button button--round button--wishlist">
                    <WishListIcon className={classes.Icon} />
                    {/* <svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>Wishlist Icon</title>
                        <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                    </svg> */}
                </button>
            </figure>
            <div className={classes.Product__details}>
                <h1 className={classes.Product__title} itemProp="brand">Brand name</h1>
                <p className={classes.Product__subtitle} itemProp="description">Product title</p>
                <div className={classes.Product__price} itemScope itemType="http://schema.org/Offer">
                    <span className={classes.Product__price__strike}>£210</span>
                    <span className={classes.Product__price__discounted} itemProp="price">£210</span>
                </div>
                <button className="product__add-to-cart button button--primary">Add to Cart</button>
            </div>
        </article>
       
    );
}

CardProduct.propTypes = {
    
};

CardProduct.defaultProps = {

};

export default CardProduct;