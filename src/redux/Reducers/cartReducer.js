import * as typeActions from '../Constants/cartConstants'

const initialState = {
    items: [],
}
export const cartReducer = ( state=initialState, action) => {
    switch(action.type){
        case typeActions.ADD_TO_CART:
            
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case typeActions.REMOVE_TO_CART:
            return{
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state;
    }
}