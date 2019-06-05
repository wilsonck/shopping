import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

import Button from "../Button/Button";

import classes from './ListProducts.module.scss';

function ListProducts({
    dataList,
    removeToList,
    showValues,
    total
}) {

    return (
        <Fragment>
            <ul className={classes.ListProducts}>
                {dataList.map((prod,index) => (
                    <li className={classes.Product} key={`prod-${index}`}>
                        <img className={classes.Image} src={`/images/img01.png`} alt={prod.name} itemProp="image"/>
                        <div className={classes.Name} >{prod.name} </div>
                        {showValues && <div className={classes.Price} >{prod.quantity} x £{prod.price}</div>}
                        <Button
                            className={classes.RemoveBagButton}
                            onClick={() => removeToList(prod.productId)}>
                            X
                        </Button>
                    </li>
                ))}
            </ul>
            {showValues && <div className={classes.Total} >Cart Total: <span>£{total}</span></div> }
        </Fragment>
    );
    
}

ListProducts.propTypes = {
    
};

ListProducts.defaultProps = {
    showValues: true
};

export default ListProducts;