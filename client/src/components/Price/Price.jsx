import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { getClassesToApply } from '../../helpers/formatter/Classes';

import classes from './Price.module.scss';

const buildPrice = (price, classes) => (<span className={getClassesToApply(classes)} itemProp="price">£{price}</span>);

function Price({
    regularPrice,
    discountPrice
}) {

    //Set the 3 classes used in the component
    //Regular - if the product has only one price
    const DEFAULT_CLASS_PRICE = classes.Price;
    //Discount - price product with discount
    const DEFAULT_CLASS_DISCOUNTED = classes.Discounted;
    //strike - the old price
    const DEFAULT_CLASS_STRIKE = classes.Strike;

    const renderPrice = () => {
        if (discountPrice){
            return (
                <Fragment>
                    {buildPrice(regularPrice, DEFAULT_CLASS_STRIKE)}
                    {buildPrice(regularPrice, DEFAULT_CLASS_DISCOUNTED)}
                </Fragment>
            )
        }
        return (buildPrice(regularPrice, DEFAULT_CLASS_PRICE));
    }


    return (
        <div className={classes.Price} itemScope itemType="http://schema.org/Offer">
            {renderPrice()}
        </div>
    );
}

Price.propTypes = {
    regularPrice: PropTypes.string,
    discountPrice: PropTypes.string 
};

Price.defaultProps = {

};

export default Price;