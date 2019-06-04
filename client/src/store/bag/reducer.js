const initialState = {
    bag: {
        products: [],
        total: 0
    }
};

const reducerType = "bag"

 /**
 * Cacl total of cart.
 * @param {array} task
 */
const calculateToTalCart = (products = []) => {
    let totalCart = 0;
    products.forEach(prod => totalCart = Number(prod.quantity) * Number(prod.price));
    return totalCart;
};


const productsReducer = (state = initialState, action) => {

    const constBaseName = reducerType.toUpperCase();

    switch (action.type) {
        case `${constBaseName}_FETCH_ALL`:
        const productsBag = {
            products: action.payload,
            total: calculateToTalCart(action.payload)
        };
        return { 
            ...state, 
            [reducerType]: productsBag, 
            "meta": action.payload.meta 
        };

        case `${constBaseName}_ADD_PRODUCT_CART`:
            const productsCart = action.payload;
            const newItem = {
                products: productsCart,
                total: calculateToTalCart(productsCart)
            };
            const newState = { 
                ...state, 
                [reducerType]: newItem 
            };
            return newState;

        case `${constBaseName}_EDIT`:
            const newStationTypes = [...state[reducerType]];
            newStationTypes[state[reducerType].findIndex(st => st.id === action.payload.id)] = {...action.payload}
            return { 
                ...state, 
                [reducerType]: newStationTypes 
            };

        case `${constBaseName}_REMOVE_PRODUCT_CART`:
            const deleteBag = {
                products: action.payload,
                total: calculateToTalCart(action.payload)
            };
            return { 
                ...state, 
                [reducerType]: deleteBag, 
                "meta": action.payload.meta 
            };

        default:
          return state;
      }
  };

  export default productsReducer;