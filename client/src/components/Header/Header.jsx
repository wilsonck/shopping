import React from 'react';
// import PropTypes from 'prop-types';

import BadgeIcon from "../BadgeIcon/BadgeIcon";
import ListProducts from "../ListProducts/ListProducts";

import { ReactComponent as BagIcon } from '../../assets/svg/bag.svg';
import { ReactComponent as WishListIcon } from '../../assets/svg/wishlist.svg';

import { getClassesToApply } from '../../helpers/formatter/Classes';

import Popover from "../Popover/Popover";

import classes from './Header.module.scss';

function Header({
    bagData,
    wishListData,
    removeToCart,
    removeToWishList
}) {

    const wishListContent = () => {
        return (<ListProducts 
            dataList={wishListData} 
            removeToList={removeToWishList} 
            showValues={false}
            messageToEmptyList="No products in your Wish List"
        />);
    }

    const bagContent = () => {
        return (<ListProducts 
                    dataList={bagData.products} 
                    removeToList={removeToCart}
                    total={bagData.total} 
                    messageToEmptyList="No products in your Bag"
                />);
    }

    return (
        <header className={getClassesToApply(classes.Header, "container")}>
            <h1 className={classes.PageTitle}>PRODUCT LIST</h1>
            <aside className={classes.HeaderBag}>

                <Popover className={classes.MainPopover} placement={'bottom'} content={bagContent()}>
                    {/* Cart */}
                    <div className={classes.Popover}>
                        <BadgeIcon
                            className={classes.HeaderBag__count}
                            counter={bagData.products.length}
                            renderIcon={() => (<BagIcon className={getClassesToApply(classes.Icon, classes.BagIcon)} />)}
                            price={bagData.total}
                        />
                    </div>
                </Popover>

                <Popover className={classes.MainPopover} placement={'bottom'} content={wishListContent()}>
                    {/* WishList */}
                    <div className={classes.Popover}>
                        <BadgeIcon
                            className={classes.HeaderBag__wishlistCount}
                            counter={wishListData.length}
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