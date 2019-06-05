import wishListService from "../../services/wishList";

const reducerType = "wishList"

const objectRequest = (productId, quantity = 1) => {
    return {
        productId,
        quantity
    }
}

/**
 * Fetches fetchProducts
 */
const fetchWishList =  () =>  {
    return async dispatch => {
        try {
            const wishList = await wishListService.findAll();
            dispatch({ 
                type: `${reducerType.toUpperCase()}_FETCH_ALL`, 
                payload: wishList 
            });
        } catch(error) {
            console.error(error)
        }
    };
}

/**
 * Fetches fetchProducts
 */
const addProductWishList =  (productId) =>  {
    return async dispatch => {
        try {
            const wishList = await wishListService.save(objectRequest(productId));
            dispatch({ 
                type: `${reducerType.toUpperCase()}_ADD_PRODUCT_WISHLIST`, 
                payload: wishList 
            });
        } catch(error) {
            console.error(error)
        }
    };
}

/**
 * Fetches fetchProducts
 */
const removeProductToWishList =  (productId) =>  {
    return async dispatch => {
        try {
            await wishListService.remove(productId);
            dispatch({ 
                type: `${reducerType.toUpperCase()}_REMOVE_PRODUCT_WISHLIST`, 
                payload: { productId: productId }  
            });
        } catch(error) {
            console.error(error)
        }
    };
}

export {
    fetchWishList,
    addProductWishList,
    removeProductToWishList
}