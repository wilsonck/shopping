import React from 'react';

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

export default Header;