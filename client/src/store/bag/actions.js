import bagService from "../../services/bag";

const reducerType = "bag"

const objectRequest = (productId, quantity = 1) => {
    return {
        productId,
        quantity
    }
}

/**
 * Fetches fetchProducts
 */
const fetchBag =  () =>  {
    return async dispatch => {
        try {
            const bag = await bagService.findAll();
            dispatch({ 
                type: `${reducerType.toUpperCase()}_FETCH_ALL`, 
                payload: bag 
            });
        } catch(error) {
            console.error(error)
        }
    };
}

/**
 * Fetches fetchProducts
 */
const addProductCart =  (productId) =>  {
    return async dispatch => {
        try {
            const bag = await bagService.save(objectRequest(productId));
            console.log("bag --> ",bag);
            dispatch({ 
                type: `${reducerType.toUpperCase()}_ADD_PRODUCT_CART`, 
                payload: bag 
            });
        } catch(error) {
            console.error(error)
        }
    };
}

/**
 * Fetches fetchProducts
 */
const removeProductToCart =  (productId) =>  {
    return async dispatch => {
        try {
            const bag = await bagService.remove(productId);
            dispatch({ 
                type: `${reducerType.toUpperCase()}_REMOVE_PRODUCT_CART`, 
                payload: bag 
            });
        } catch(error) {
            console.error(error)
        }
    };
}

/**
 * Fetches fetchProducts
 */
const removeProductCart =  (productId) =>  {
    return async dispatch => {
        try {
            const bag = await bagService.remove(productId);
            dispatch({ 
                type: `${reducerType.toUpperCase()}_REMOVE_PRODUCT_CART`, 
                payload: bag 
            });
        } catch(error) {
            console.error(error)
        }
    };
}

export {
    fetchBag,
    addProductCart,
    removeProductToCart
}