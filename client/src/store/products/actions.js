import productService from "../../services/products";

const reducerType = "products"

/**
 * Fetches fetchProducts
 */
const fetchProducts =  (where) =>  {
    return async dispatch => {
        try {
            const products = await productService.findAll(where);
            dispatch({ 
                type: `${reducerType.toUpperCase()}_FETCH_ALL`, 
                payload: products 
            });
        } catch(error) {
            console.error(error)
        }
    };
}

export {
    fetchProducts
}