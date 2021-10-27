import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {allProductsReducer} from './Reducers/productsReducers'
import {allFavoritesReducer} from './Reducers/favoritesReducer'

const Reducers = combineReducers({
    allProducts: allProductsReducer,
    allFavorites: allFavoritesReducer,
})

const middlewares = [thunk]

const store = createStore(
    Reducers,
    applyMiddleware(...middlewares)
)

export default store;