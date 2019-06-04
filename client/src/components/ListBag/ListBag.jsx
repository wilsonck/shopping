import React from 'react';
// import PropTypes from 'prop-types';
import classes from './ListBag.module.scss';

function ListBag({
    bagData
}) {

    const {
        products,
        total
    } = bagData;

    return (
        <ul>
            {products.map}

        </ul>
        <h1>Lista com carrinho de compras</h1>
    );
}

ListBag.propTypes = {
    
};

ListBag.defaultProps = {

};

export default ListBag;