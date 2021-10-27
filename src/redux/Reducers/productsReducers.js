import {productsTypeActions as typeActions} from '../Constants/productConstants'

const initialState = {
    items: [],
    loading: false,
    err: null,
}

export const allProductsReducer = ( state=initialState, action)=>{
    switch(action.type){
        case typeActions.ALL_PRODUCTS_REQUEST:
            return{
                ...state,
                loading: true,
            } 
        case typeActions.ALL_PRODUCTS_SUCCESS:
            return{
                ...state,
                items: [...state.items, ...action.payload],
                loading: false,
            }
        case typeActions.ALL_PRODUCTS_FAIL:
            return{
                ...state,
                items: [],
                loading: false,
                err: action.payload,
            }
        default:
            return state;
    }
}