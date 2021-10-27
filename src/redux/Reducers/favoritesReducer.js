const initialState = {
    items: [],
}

export const allFavoritesReducer = ( state=initialState, action)=>{
    switch(action.type){
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state;
    }
}