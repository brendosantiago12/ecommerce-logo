import {productsTypeActions as typeActions} from '../Constants/productConstants'
import axios from 'axios'

export const getProducts = () => async (dispatch) =>{
    try{
        dispatch({ type: typeActions.ALL_PRODUCTS_REQUEST})
        const res = await axios.get('https://fakestoreapi.com/products?limit=16')
        dispatch({
            type: typeActions.ALL_PRODUCTS_SUCCESS,
            payload: res.data,
        })
    }catch(err){
        dispatch({
            type: typeActions.ALL_PRODUCTS_FAIL,
            payload: err,
        })
    }
}
