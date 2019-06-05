const initialState = {
    brands: []
};

const reducerType = "brands";

const brandsReducer = (state = initialState, action) => {

    const constBaseName = reducerType.toUpperCase();

    switch (action.type) {
        case `${constBaseName}_FETCH_ALL`:
        return { 
            ...state, 
            [reducerType]: action.payload.data, 
            "meta": action.payload.meta 
        };

        default:
          return state;
      }
  };

  export default brandsReducer;