import React from 'react';
import classes from './Pagination.module.scss';

import { ReactComponent as ArrowLeft } from '../../assets/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg';

function Footer() {
    return (
        <nav className={classes.Pagination}>
            <ul className={classes.Pagination__list}>
                <li className={classes.PaginationItem}>
                    <a href="#" className={classes.PaginationLink}>
                        <ArrowLeft className="icon" />
                        {/* <svg class="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Arrow Left</title>
                            <polygon id="Left-Icon" stroke="none" fill-rule="evenodd" transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) " points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                        </svg> */}
                    </a>
                </li>
                <li className={classes.PaginationItem}>
                    <a href="#" className={classes.PaginationLink}>1</a>
                </li>
                <li className={classes.PaginationItem}>
                    <a href="#" className={classes.PaginationLink}>
                        2
                    </a>
                </li>
                <li className={classes.PaginationItem}>
                    <a href="#" className={classes.PaginationLink}>
                        3
                    </a>
                </li>
                <li className={classes.PaginationItem}>
                    <a href="#" className={classes.PaginationLink}>
                        ...
                    </a>
                </li>
                <li className={classes.PaginationItem}>
                    <a href="#" className={classes.PaginationLink}>
                        10
                    </a>
                </li>
                <li className={classes.PaginationItem}>
                    <a href="#" className={classes.PaginationLink}>
                        <ArrowRight className="icon" />
                        {/* <svg class="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Arrow Right</title>
                            <polygon id="Left-Iocn" stroke="none" fill-rule="evenodd" points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                        </svg> */}
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Footer;