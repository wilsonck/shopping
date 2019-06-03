import bagService from "../../services/products";

const reducerType = "bag"

/**
 * Fetches fetchProducts
 */
const fetchBag =  (where) =>  {
    return async dispatch => {
        try {
            const bag = await bagService.findAll(where);
            dispatch({ 
                type: `${reducerType.toUpperCase()}_FETCH_ALL`, 
                payload: bag 
            });
        } catch(error) {
            console.error(error)
        }
    };
}

export {
    fetchBag
}