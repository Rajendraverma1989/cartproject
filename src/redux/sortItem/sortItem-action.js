import { SortActionTypes } from './sortItem-type'; 
export const setCurrentItems = sort => ({
    type: SortActionTypes.SET_SORTITEM,
    payload: sort
});
