import React from 'react'
import { Switch,Route } from 'react-router-dom'

import Home from './Home/Home'
import Products from './Products/Products'
import Favorites from './Favorites/Favorites'
import SingleProduct from './SingleProduct/SingleProduct'

const Root = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/favorites" component={Favorites}/>
            <Route path="/product" component={SingleProduct}/>
        </Switch>
    )
}
export default Root;