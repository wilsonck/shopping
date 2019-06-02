import React from 'react';
// import PropTypes from 'prop-types';

import { ReactComponent as BagIcon } from '../../assets/svg/bag.svg';
import { ReactComponent as WishListIcon } from '../../assets/svg/wishlist.svg';

import { getClassesToApply } from '../../helpers/formatter/Classes';

import classes from './BadgeIcon.module.scss';

function Header({
    className,
    renderIcon,
    price,
    counter
}) {

    const renderPrice =  () => price ? (<div className={classes.HeaderBag__price}>{price}</div>) : null;
    const renderCounter =  () => counter ? (<span className={classes.Bag__itemCounter}>{counter}</span>) : null;

    return (
        <div className={getClassesToApply(classes.BadgeIcon__item, className)}>
            {renderPrice()}
            {renderIcon()}
            {renderCounter()}
        </div>
    );
}

Header.propTypes = {
    
};

Header.defaultProps = {

};

export default Header;