import React from 'react';
// import PropTypes from 'prop-types';

import BadgeIcon from "../BadgeIcon/BadgeIcon";

import { ReactComponent as BagIcon } from '../../assets/svg/bag.svg';
import { ReactComponent as WishListIcon } from '../../assets/svg/wishlist.svg';

import { getClassesToApply } from '../../helpers/formatter/Classes';

import classes from './Header.module.scss';

function Header() {

    return (
        <header className={getClassesToApply(classes.Header, "container")}>
            <h1 className={classes.PageTitle}>PRODUCT LIST</h1>
            <aside className={classes.HeaderBag}>
                {/* Cart */}
                <BadgeIcon
                    className={classes.HeaderBag__count}
                    counter="10"
                    renderIcon={() => (<BagIcon className={getClassesToApply(classes.Icon, classes.BagIcon)} />)}
                    price="£210"
                />
                {/* WishLIst */}
                <BadgeIcon
                    className={classes.HeaderBag__wishlistCount}
                    counter="5"
                    renderIcon={() => (<WishListIcon className={getClassesToApply(classes.Icon, classes.WishListIcon)} />)}
                />
            </aside>
        </header>
    );
}

Header.propTypes = {
    
};

Header.defaultProps = {

};

export default Header;