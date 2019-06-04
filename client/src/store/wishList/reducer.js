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
            [reducerType]: action.payload, 
            "meta": action.payload.meta 
        };

        case `${constBaseName}_ADD_PRODUCT_WISHLIST`:
            const newState = { 
                ...state, 
                [reducerType]: action.payload 
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
                [reducerType]: action.payload,
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