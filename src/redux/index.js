import { combineReducers } from 'redux';
import SortReducer from './sortItem/sortItem-reducer';
import CartItemReducer from './cartItem/cartItem-reducer';


export default combineReducers({
    sort: SortReducer,
    cartItem: CartItemReducer
})