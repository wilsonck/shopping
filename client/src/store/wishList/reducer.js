const initialState = {
    wishList: []
};

const reducerType = "wishList"


const productsReducer = (state = initialState, action) => {

    const constBaseName = reducerType.toUpperCase();

    switch (action.type) {
        case `${constBaseName}_FETCH_ALL`:
        return { 
            ...state, 
            [reducerType]: action.payload.data
        };

        case `${constBaseName}_ADD_PRODUCT_WISHLIST`:
                const newItem = action.payload;
                const arrayProducts = [newItem, ...state[reducerType]];
                return {
                    ...state, 
                    [reducerType]: arrayProducts
                }

        case `${constBaseName}_REMOVE_PRODUCT_WISHLIST`:
            const removeProduct = state[reducerType].filter(st => st.productId !== action.payload.productId);
            const newState = { 
                ...state, 
                [reducerType]: removeProduct
            };
            return newState ;

        default:
          return state;
      }
  };

  export default productsReducer;