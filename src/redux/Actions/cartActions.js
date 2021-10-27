import * as typeActions from '../Constants/cartConstants'

export const addToCart = (product)=>{
    return{
        type: typeActions.ADD_TO_CART,
        payload: product,
    }
}
export const removeToCart = (product)=>{
    return{
        type: typeActions.REMOVE_TO_CART,
        payload: product,
    }
}