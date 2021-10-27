import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GiSmartphone } from 'react-icons/gi';
import { RiHandbagLine } from 'react-icons/ri';
import { RiTShirtLine } from 'react-icons/ri';
import { GiLargeDress } from 'react-icons/gi';
import Product from '../../components/Product/Product'
import { Main, Filters, Container, AllProducts, Credibility } from './style'

import { DataCredibility } from '../../data/Data'
import { getProducts } from '../../redux/Actions/productActions'

const Products = ()=>{

    const dispatch = useDispatch()
    const {items, loading} = useSelector( state => state.allProducts)

    useEffect(()=>{
            dispatch(getProducts())
    },[]) 
    
    return(
        <Main>
            <Credibility>
                <div>
                    { DataCredibility.map((item, idx)=>(
                        <div key={idx}>
                            <span>{item.icon}</span>
                            <p>{item.slug}</p>
                        </div>
                    )) }
                </div>
            </Credibility>
            <Container>
                <Filters>
                    <h3>Filtre por:</h3>
                    <ul>
                    <li >
                        <GiSmartphone style={{fontSize: 18, marginRight: 8}}/>Moda feminina
                    </li>
                    <li>
                        <RiHandbagLine style={{fontSize: 18, marginRight: 8}}/>Moda masculina
                    </li>
                    <li>
                        <RiTShirtLine style={{fontSize: 18, marginRight: 8}}/>Eletrônicos
                    </li>
                    <li>
                        <GiLargeDress style={{fontSize: 18, marginRight: 8}}/>Acessórios
                    </li>
                </ul>
                </Filters>
                <AllProducts>
                    { !loading 
                        ? ( items.map((item, key) => <Product item={item} key={key}/>) )
                        : <span>carregando...</span>
                    }
                </AllProducts>
            </Container>
        </Main>
    )
}

export default Products;