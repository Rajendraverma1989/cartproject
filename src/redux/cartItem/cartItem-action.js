import { CartActionTypes } from './cartItem-type'; 
export const setCurrentCart = cart => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: cart
});

export const removeFromCart = cart => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: cart
});

export const decreaseItem = cart => ({
    type: CartActionTypes.SUB_QUANTITY,
    payload: cart
});