import { SortActionTypes } from './sortItem-type';
const INITIAL_STATE ={
}
const SortReducer= (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SortActionTypes.SET_SORTITEM:
                return {
                    ...state,
                    sortItem: action.payload
                };       
        default:
            return state;
    }
}
export default SortReducer;