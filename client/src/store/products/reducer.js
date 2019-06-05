const initialState = {
    products: []
};

const reducerType = "products"

const productsReducer = (state = initialState, action) => {

    const constBaseName = reducerType.toUpperCase();

    switch (action.type) {
        case `${constBaseName}_FETCH_ALL`:
        return { 
            ...state, 
            [reducerType]: action.payload.data, 
            "meta": action.payload.meta.total
        };

        default:
          return state;
      }
  };

  export default productsReducer;