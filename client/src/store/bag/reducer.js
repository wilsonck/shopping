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
    products.forEach(prod => totalCart += Number(prod.quantity) * Number(prod.price));
    return totalCart;
};

const bagsReducer = (state = initialState, action) => {

    const constBaseName = reducerType.toUpperCase();

    switch (action.type) {
        case `${constBaseName}_FETCH_ALL`:
        const productsBag = {
            products: action.payload.data,
            total: calculateToTalCart(action.payload.data)
        };
        return { 
            ...state, 
            [reducerType]: productsBag, 
            "meta": action.payload.meta 
        };

        case `${constBaseName}_ADD_PRODUCT_CART`:
                const newItem = action.payload;
                const arrayProducts = [newItem, ...state[reducerType].products];
                const newStateWithNewProduct = {
                    ...state, 
                    [reducerType]: {
                        products: arrayProducts,
                        total: calculateToTalCart(arrayProducts)
                    }
                }
                return newStateWithNewProduct;

        case `${constBaseName}_REMOVE_PRODUCT_CART`:

            const removeProduct = state[reducerType].products.filter(st => st.productId !== action.payload.productId);
            const newState = { 
                ...state, 
                [reducerType]: {
                    products: removeProduct,
                    total: calculateToTalCart(removeProduct) 
                }
            };
            return newState ;


        default:
          return state;
      }
  };

  export default bagsReducer;