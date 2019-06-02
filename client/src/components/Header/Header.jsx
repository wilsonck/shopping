import React from 'react';
// import PropTypes from 'prop-types';

import { ReactComponent as BagIcon } from '../../assets/svg/bag.svg';
import { ReactComponent as WishListIcon } from '../../assets/svg/wishlist.svg';

import { getClassesToApply } from '../../helpers/formatter/Classes';

import classes from './Header.module.scss';

function Header() {

    return (
        <header className={getClassesToApply(classes.Header, "container")}>
            <h1 className={classes.PageTitle}>PRODUCT LIST</h1>
            <aside className={classes.HeaderBag}>
                
                <div className={getClassesToApply(classes.HeaderBag__item, classes.HeaderBag__count)}>
                    <div className={classes.HeaderBag__price}>£210</div>
                    <BagIcon className={getClassesToApply(classes.Icon, classes.BagIcon)} />
                    <span className={classes.Bag__itemCounter}>10</span>
                </div>


                <div className={getClassesToApply(classes.HeaderBag__item, classes.HeaderBag__wishlistCount)}>
                    <WishListIcon className={getClassesToApply(classes.Icon, classes.WishListIcon)} />
                    <span className={classes.Bag__itemCounter}>5</span>
                </div>

            </aside>
        </header>
    );
}

Header.propTypes = {
    
};

Header.defaultProps = {

};

export default Header;