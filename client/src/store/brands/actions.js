import brandsService from "../../services/brands";

const reducerType = "brands"

/**
 * Fetches an engineer by uid.
 * @param {*} uid - Engineer uid.
 */
const fetchBrands =  () =>  {
    return async dispatch => {
        try {
            const brands = await brandsService.findAll();
            dispatch({ 
                type: `${reducerType.toUpperCase()}_FETCH_ALL`, 
                payload: brands
            });
        } catch(error) {
            console.error(error)
        }
    };
}

export {
    fetchBrands
}