import React from 'react';
// import PropTypes from 'prop-types';

import classes from './Filter.module.scss';

function Filter() {

    return (
        <div className={classes.ProductControls}>
            <label className={classes.ProductControls__label} htmlFor="Brands-Filter">Brands: </label>
            <select className={classes.ProductControls__select} id="Brands-Filter">
                <option value="">All</option>
                <option value="1">MCQ ALEXANDER MCQUEEN</option>
                <option value="2">OFF-WHITE</option>                       
                <option>...</option>
            </select>

            <label className={classes.ProductControls__label} htmlFor="Sort">Sort: </label>
            <select className={classes.ProductControls__select} id="Sort">
                <option value="1">Price ascending</option>
                <option value="2">Price descending</option>           
            </select>
        </div>
    );
}

Filter.propTypes = {
    
};

Filter.defaultProps = {

};

export default Filter;