import React from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { BiCart } from 'react-icons/bi'
import { FiHeart, FiEye } from 'react-icons/fi'
import { CardDestaques, CardDestaquesTxt, 
        CardDestaquesImg, CardDestaquesTitle, Price} from './style'

import { favoritesAction } from '../../redux/Actions/favoritesActions'

const Product = ({item})=>{
    const dispatch = useDispatch()
    
    return(
        <CardDestaques>
            <span>
                <i><FiHeart onClick={() => dispatch(favoritesAction(item))}/></i>
                <i><BiCart/></i>
                <i><FiEye/></i>
            </span>
            <CardDestaquesImg >
                <div>
                    <img src={item.image} alt={item.title} />
                </div>
            </CardDestaquesImg>
            <CardDestaquesTxt>
                <CardDestaquesTitle>{item.title}</CardDestaquesTitle>
                <Price>{ new Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(item.price) }</Price>
            </CardDestaquesTxt>
        </CardDestaques>
    )
}
export default Product;