import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from "../Button/Button";

import classes from './ListProducts.module.scss';

function ListProducts({
    dataList,
    removeToList,
    showValues,
    total,
    messageToEmptyList
}) {

    const renderListProducts = () => {
        if (dataList.length === 0){
            return (<h3 className={classes.NoProductsShow}>{messageToEmptyList}</h3>)
        }
        return (dataList.map((prod,index) => (
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
        )))
    }

    return (
        <Fragment>
            <ul className={classes.ListProducts}>
                {renderListProducts()}
            </ul>
            {showValues && <div className={classes.Total} >Cart Total: <span>£{total}</span></div> }
        </Fragment>
    );
    
}

ListProducts.propTypes = {
    messageToEmptyList: PropTypes.string
};

ListProducts.defaultProps = {
    showValues: true,
    messageToEmptyList: "No products to show."
};

export default ListProducts;