import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import brandsReducer from './brands/reducer';
import bagReducer from './bag/reducer';

const rootReducer = combineReducers({
    productsReducer,
    brandsReducer,
    bagReducer
});

export default rootReducer;