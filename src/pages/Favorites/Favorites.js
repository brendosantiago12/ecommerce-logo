import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { Main, Container } from './style'
import Product from '../../components/Product/Product'

import {favoritesAction} from '../../redux/Actions/favoritesActions'

const Favorites = ()=>{
    const dispatch = useDispatch()
    const {items} = useSelector( state => state.allFavorites)

    return(
        <Main>
            <Container>
            <div>Favorites</div>
            { items.length > 0
                ? items.map((item, key) => <Product item={item} key={key}/>)
                : <span>Lista vazia</span>
            }
            </Container>
        </Main>
        
    )
}
export default Favorites;