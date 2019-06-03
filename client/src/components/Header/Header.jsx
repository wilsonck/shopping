import React from 'react';
// import PropTypes from 'prop-types';

import BadgeIcon from "../BadgeIcon/BadgeIcon";

import { ReactComponent as BagIcon } from '../../assets/svg/bag.svg';
import { ReactComponent as WishListIcon } from '../../assets/svg/wishlist.svg';

import { getClassesToApply } from '../../helpers/formatter/Classes';

import Popover from "../Popover/Popover";

import classes from './Header.module.scss';

function Header() {

    const wishListContent = () => {
        return (<h1> WishList </h1>);
    }

    const bagContent = () => {
        return (<h1> Cart </h1>);
    }

    return (
        <header className={getClassesToApply(classes.Header, "container")}>
            <h1 className={classes.PageTitle}>PRODUCT LIST</h1>
            <aside className={classes.HeaderBag}>

                <Popover placement={'bottom'} content={bagContent()}>
                    {/* Cart */}
                    <div className={classes.Popover}>
                        <BadgeIcon
                            className={classes.HeaderBag__count}
                            counter="10"
                            renderIcon={() => (<BagIcon className={getClassesToApply(classes.Icon, classes.BagIcon)} />)}
                            price="£210"
                        />
                    </div>
                </Popover>

                <Popover placement={'bottom'} content={wishListContent()}>
                    {/* WishList */}
                    <div className={classes.Popover}>
                        <BadgeIcon
                            className={classes.HeaderBag__wishlistCount}
                            counter="5"
                            renderIcon={() => (<WishListIcon className={getClassesToApply(classes.Icon, classes.WishListIcon)} />)}
                        />
                    </div>
                </Popover>

            </aside>
        </header>
    );
}

Header.propTypes = {
    
};

Header.defaultProps = {

};

export default Header;