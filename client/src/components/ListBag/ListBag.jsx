import React from 'react';
// import PropTypes from 'prop-types';

import Button from "../Button/Button";

import classes from './ListBag.module.scss';

function ListBag({
    bagData,
    removeToCart
}) {

    const {
        products,
        total
    } = bagData;

    return (
        <ul className={classes.ListBag}>
            {products.map((prod,index) => (
                <li className={classes.Product} key={`prod-${index}`}>
                    <img className={classes.Image} src={`/images/img01.png`} alt={prod.name} itemProp="image"/>
                    <div className={classes.Name} >{prod.name} </div>
                    <div className={classes.Price} >{prod.quantity} x £{prod.price}</div>
                    <Button
                        className={classes.RemoveBagButton}
                        onClick={() => removeToCart(prod.productId)}>
                        X
                    </Button>
                </li>
            ))}
                <li className={classes.Total}>Cart Total: <span>£{total}</span></li>
        </ul>
    );
}

ListBag.propTypes = {
    
};

ListBag.defaultProps = {

};

export default ListBag;