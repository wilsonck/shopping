import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import brandsReducer from './brands/reducer';
import bagsReducer from './bags/reducer';

const rootReducer = combineReducers({
    productsReducer,
    brandsReducer,
    bagsReducer
});

export default rootReducer;