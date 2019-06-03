import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import brandsReducer from './brands/reducer';

const rootReducer = combineReducers({
    productsReducer,
    brandsReducer
});

export default rootReducer;