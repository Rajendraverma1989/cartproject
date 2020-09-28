import { CartActionTypes } from './cartItem-type';
const INITIAL_STATE ={
    addedItems: [],
    total: 0
}
const CartItemReducer= (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
                let addedItem = state.addedItems.find(item=> item.id === action.payload.id);     
                let existed_item= state.addedItems.find(item=> action.payload.id === item.id);
               if(existed_item)
               {
                  addedItem.quantity += 1 
                   return{
                      ...state,
                       total: state.total + addedItem.discountPrice 
                        }
              }
               else{
                let newTotal = state.total + action.payload.discountPrice
                action.payload['quantity'] = 1;
                  return{
                      ...state,
                      addedItems: [...state.addedItems, action.payload],
                      total : newTotal
                  }                  
              }

        case CartActionTypes.SUB_QUANTITY:
            let subItem = state.addedItems.find(item=> item.id === action.payload.id);     

        if(subItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.payload.id)
            let newTotal = state.total - subItem.discountPrice
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            subItem.quantity -= 1
            const newTotal = state.total - subItem.discountPrice
            return{
                ...state,
                total: newTotal
            }
        }

        case CartActionTypes.REMOVE_FROM_CART:
            let itemToRemove= state.addedItems.find(item=> action.payload.id === item.id)
            let new_items = state.addedItems.filter(item=> action.payload.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.discountPrice * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
           
        default:
            return state;
    }
}
export default CartItemReducer;