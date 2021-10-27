import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import Product from '../../components/Product/Product'
import { Main,SliderSection,NavegationLeft,NavegationRight,Sliders,Slide ,Destaques, Products, DestaquesItem, Credibility } from './style'
import { DataSlider, DataCategory, DataCredibility } from '../../data/Data'

const Home = ()=>{
    const [translate, setTranslate] = useState(100);
    const [api, setApi] = useState([])

    const RightNave = ()=>{
        translate === -100 ? setTranslate(100) : setTranslate(translate - 100)
    }
    const LeftNave = ()=>{
        translate === 100 ? setTranslate(-100) : setTranslate(translate + 100)
    }
    
    useEffect(()=>{
        Axios.get('https://fakestoreapi.com/products?limit=8')
            .then(res => setApi(res.data))
            .catch(err => console.log(err))
    },[])
    return (
        <Main>
            <SliderSection>
                <NavegationLeft onClick={ () => LeftNave() } >
                    <MdKeyboardArrowLeft/>
                </NavegationLeft>
                <NavegationRight onClick={ () => RightNave() } >
                    <MdKeyboardArrowRight/>
                </NavegationRight>

                <Sliders>
                    {
                        DataSlider.map((item, idx)=>(
                            <Slide key={idx} bg={item.bg} translate={translate}>
                                <div>
                                    <h3> {item.title} </h3>
                                    <p>{item.txt}</p>
                                    <button>Ver agora</button>
                                </div>
                                <img  src={item.img} alt={item.txt}/>
                                <span>15% off !!<hr/></span>
                            </Slide>
                        ))
                    }
                </Sliders>
            </SliderSection>
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
            <Destaques>
                <div>
                    <hr/>
                    <h2>Nossas categorias</h2>
                    <hr/>
                </div>
                <article>
                    { DataCategory.map((item, idx) => ( 
                        <DestaquesItem key={idx}>
                            <img src={item.img} alt={item.title} />
                            <div>
                                <h3>{item.title}</h3>
                                <button>Ver agora</button>
                            </div>
                        </DestaquesItem>
                     )) }
                </article>
            </Destaques>
            <Products>
                <span>
                    <hr/>
                    <h2>Aproveite as melhores ofertas !!</h2>
                    <hr/>
                </span>
                <div>
                    { api.map((item, key) => <Product item={item} key={key}/>) }
                </div> 
            </Products>
        </Main>
    )
}
export default Home;