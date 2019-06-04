import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import brandsReducer from './brands/reducer';
import bagReducer from './bag/reducer';
import wishListReducer from './wishList/reducer';

const rootReducer = combineReducers({
    productsReducer,
    brandsReducer,
    bagReducer,
    wishListReducer
});

export default rootReducer;