import React from 'react';
// import PropTypes from 'prop-types';

import classes from './Container.module.scss';

function Header({
    children
}) {

    return (
        <main className={classes.Main}>
            <div className="container" >
                {children}
            </div>
        </main>
    );
}

Header.propTypes = {
    
};

Header.defaultProps = {

};

export default Header;