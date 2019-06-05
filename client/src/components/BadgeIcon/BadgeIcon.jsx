import React from 'react';
import PropTypes from 'prop-types';

import { getClassesToApply } from '../../helpers/formatter/Classes';

import classes from './BadgeIcon.module.scss';

function Header({
    className,
    renderIcon,
    price,
    counter
}) {

    const renderPrice =  () => price ? (<div className={classes.HeaderBag__price}>£ {price}</div>) :  null;
    const renderCounter =  () => (<span className={classes.Bag__itemCounter}>{counter}</span>);

    return (
        <div className={getClassesToApply(classes.BadgeIcon__item, className)}>
            {renderPrice()}
            {renderIcon()}
            {renderCounter()}
        </div>
    );
}

Header.propTypes = {
    className: PropTypes.string,
    renderIcon: PropTypes.func,
    price: PropTypes.number,
    counter: PropTypes.number
};

Header.defaultProps = {
    counter: 0
};

export default Header;