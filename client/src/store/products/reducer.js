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

        case `${constBaseName}_SAVE`:
            const newItem = action.payload;
            newItem.isNew = true;
            const newState = { 
                ...state, 
                [reducerType]: [newItem, ...state[reducerType]] 
            };
            return newState;

        case `${constBaseName}_EDIT`:
            const newStationTypes = [...state[reducerType]];
            newStationTypes[state[reducerType].findIndex(st => st.id === action.payload.id)] = {...action.payload}
            return { 
                ...state, 
                [reducerType]: newStationTypes 
            };

        case `${constBaseName}_REMOVE`:
            const newElements = state[reducerType].filter(st => st.id !== action.payload.id);
            const stateStations = { 
                ...state, 
                [reducerType]: newElements 
            };
            return stateStations;

        default:
          return state;
      }
  };

  export default productsReducer;