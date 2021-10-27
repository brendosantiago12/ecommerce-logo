import React,{ useState, useEffect} from 'react'
import Axios from 'axios'

import { BiCart } from 'react-icons/bi'
import { AiOutlineDelete, AiOutlineClose } from 'react-icons/ai'
import { Wrapper, CardItem, Total, TitleComponent, ContentCart } from './style'

const ShoppingCart = ({showCart, setShowCart})=>{
    const [info, setInfo] = useState([])

    useEffect(()=>{
        Axios.get('https://fakestoreapi.com/products?limit=4')
            .then(res => setInfo(res))
            .catch(err => console.log(err))
    },[])
    return(
        <Wrapper translateX={showCart}>
            
            <TitleComponent>
            <span onClick={ ( )=> setShowCart(!showCart)}><AiOutlineClose/></span>
            <h2>Carrinho</h2>
                <i>
                    <BiCart/>
                    <span>2</span>
                </i>
            </TitleComponent>
            <ContentCart>
            {
                info.data ? ( info.data.map((item, idx) => (
                    <CardItem key={idx}>
                        <img src={item.image} />
                        <div>
                            <h3>{item.title}</h3>
                            <span>
                                <p>quantidade</p>
                                <i><AiOutlineDelete/></i>
                            </span>
                        </div>
                        <span>
                            <h4>{item.price}</h4>
                        </span>
                    </CardItem>
                ))) : <span>carregando...</span>
            }
            </ContentCart>
            <Total>
                <p>Total</p>
                <span>50.00</span>
            </Total>
        </Wrapper>
    )
}
export default ShoppingCart;