import React,{ useState,useEffect} from 'react'
import Axios from 'axios'

import { BiCart } from 'react-icons/bi'
import Product from '../../components/Product/Product'
import {Wrapper, Container, ImageProduct,ContentProduct, DetailsProduct, Details, InfoProduct,Related,
    InfoProductTitle, InfoProductCategory, InfoProductPrice, InfoProductBuy, InfoProductAddCart} from './style'


const SingleProduct = ()=>{
    const [info, setInfo] = useState([])
    const [produ, setProdu] = useState([])

    useEffect(()=>{
        Axios.get('https://fakestoreapi.com/products/1')
            .then(res => setInfo(res))
            .catch(err => console.log(err))
    },[])
    useEffect(()=>{
        Axios.get('https://fakestoreapi.com/products?limit=4')
            .then(res => setProdu(res))
            .catch(err => console.log(err))
    },[])

    return(
        <div>
        <Wrapper>
        {info.data ? (
            <Container>
                <ContentProduct>
                    <ImageProduct src={info.data.image} />
                    <InfoProduct>
                        <InfoProductTitle>{info.data.title}</InfoProductTitle>
                        <InfoProductCategory>{info.data.category}</InfoProductCategory>
                        <DetailsProduct>
                            <Details>{info.data.description}</Details>
                        </DetailsProduct>
                        <InfoProductPrice> { new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(info.data.price) } </InfoProductPrice>
                        <InfoProductBuy>Comprar agora</InfoProductBuy>
                        <InfoProductAddCart>
                            <BiCart style={{fontSize: 18, marginRight: 8}}/>
                            Adcionar ao carrinho
                        </InfoProductAddCart>
                    </InfoProduct>
                </ContentProduct>
                <Related>
                    <h2>Produtos da mesma categoria</h2>
                    <div>
                    {   produ.data 
                        ? produ.data.map((item, key)=>(
                            <Product item={item} key={key}/>
                          ))
                        : <span>carregando...</span>
                    }
                    </div>
                    
                </Related>
            </Container>
        ): <span>Carregando...</span>}
        </Wrapper>
    </div>
    )
}
export default SingleProduct;