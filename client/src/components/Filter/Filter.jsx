import React from 'react';
// import PropTypes from 'prop-types';
import Select from "../Select/Select"
import classes from './Filter.module.scss';

const optionsSortPrice = [
    {
        id: "asc",
        name: "Price ascending"
    }, {
        id: "desc",
        name: "Price descending"
    }
];

function Filter({
    optionsBrands,
    sortProductsByPrice,
    sortProductsByBrand
}) {

    return (
        <div className={classes.ProductControls}>

            <Select
                label="Brands:"
                options={optionsBrands}
                actionChangeValue={sortProductsByBrand}
            />

            <Select
                label="Sort:"
                options={optionsSortPrice}
                actionChangeValue={sortProductsByPrice}
            />
        </div>
    );
}

Filter.propTypes = {
    
};

Filter.defaultProps = {

};

export default Filter;