import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { BiCart, BiMenuAltLeft } from 'react-icons/bi'
import { FiHeart, FiEye } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'

import ShoppingCart from '../ShoppingCart/ShoppingCart'

import { Navbar, TopHeader, BottonHeader, MobileIcon, ContentLogo, NavMenu, Actions, Button, Search, NavItem, Logo } from './style'
import { Sidebar, SideMenu, SideItem,SideSearch,SideInput } from './style'

const SideBar = (display)=>{
    

    return(
        <Sidebar display={display}>
            <GrClose style={{color: 'white'}} />
            <SideSearch>
                <SideInput/>
                <Button>Pesquisar</Button>
            </SideSearch>
        
            <SideMenu>
                <SideItem>
                    Eletronics
                </SideItem>
                <SideItem>
                    Eletronics
                </SideItem>
                <SideItem>
                    Eletronics
                </SideItem>
                <SideItem>
                    Eletronics
                </SideItem>
            </SideMenu>
        </Sidebar>
    )
}

const Header = ()=>{
    const [navIcon, setNavIcon] = useState(false)
    const [showCart, setShowCart] = useState(false)

    return(
        <Navbar>
            <TopHeader>
                <ContentLogo>
                    <MobileIcon>
                        <BiMenuAltLeft onClick={ ()=> setNavIcon(!navIcon) } />
                        { navIcon? <SideBar display={navIcon}/> : null }
                    </MobileIcon>
                    <Logo to='/'>Logo</Logo>
                </ContentLogo>
                
                <Search></Search>
                <Actions>
                    <Link to='/favorites'><i><FaHeart/></i></Link>
                    
                    <i onClick={ ()=> setShowCart(!showCart) } ><FaShoppingCart/></i>
                    <i><FaUser/></i>
                </Actions>
            </TopHeader>

            <BottonHeader>
                <NavMenu>
                    <NavItem to='/products'>Eletronics</NavItem>
                    <NavItem to='/products'>Eletronics</NavItem>
                    <NavItem to='/products'>Eletonics</NavItem>
                    <NavItem to='/products'>Eletronics</NavItem>
                </NavMenu>
            </BottonHeader>
            <ShoppingCart showCart={showCart} setShowCart={setShowCart} />
        </Navbar>
    )
}
export default Header;