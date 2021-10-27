
export const favoritesAction = (product)=>{
    return{
        type: 'ADD_TO_FAVORITES',
        payload: product,
    }
}