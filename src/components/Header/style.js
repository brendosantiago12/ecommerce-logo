import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbar = styled.header`
    width: 100%;
    min-height:80px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    background-color: #FED800;
    padding: 5px 0;
    z-index: 999;
    position: absolute;
`;

export const TopHeader = styled.div`
    width: 90%;
    flex: 3;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    @media(max-width: 480px){
        width: 100%;
    }

`;
export const BottonHeader = styled.div`
    width: 90%;
    flex: 1;
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center ;
    @media(max-width: 800px){
        display: none;
    }
`;
export const Logo = styled(Link)`
    text-decoration: none;
    font-size: 28px;
    font-weight: 600;
    color: black;
    @media(max-width: 800px){
        margin-left: 16px;
        font-size: 20px;
    }
    @media(max-width: 480px){
        font-size: 16px;
        margin-left: 4px;
    }
`;
export const ContentLogo = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center ;
`;
export const MobileIcon = styled.span`
    width: 40px;
    height: 40px;
    font-size: 40px;
    cursor: pointer;
    display: none;
    justify-content: center;
    align-items: center ;
    @media(max-width: 800px){
        display: flex;
    }
`;
export const Search = styled.input`
    flex: 1;
    height: 26px;
    text-align: center ;
    border-radius: 5px;
    border: none;
    @media(max-width: 800px){
        display: none;
    }
`;
export const Actions = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center ;
    i{
        color: black;
        font-size: 24px;
        cursor: pointer;
        opacity: 0.7;
        margin-left: 8px;
        transition: all ease-in 0.3s;
        &:hover{
            opacity: 1;
            
        }
    }
    
`;
export const Button = styled.div`
    padding: 5px 10px;
    margin-left: 10px;
    color: ${props=>props.color};
    cursor: pointer;
    background: ${props=>props.bg} ;
    border: 1px solid black;
    border-radius: 10%;
    transition: 0.3s;
    &:hover{
        opacity: 0.9;
        background: ${props=>props.bg==="transparent"?'black':'transparent'};
        color: ${props=>props.bg==="white"?'black':'white'};
    }
    @media(max-width: 800px){
        padding: 3px 3px;
        margin-left: 5px;
    }
    @media(max-width: 480px){
        font-size: 11px;
        margin-left: 3px;
    }
`;
export const NavMenu = styled.nav`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center ;
`;
export const NavItem = styled(Link)`
    text-decoration: none;
    margin: 0 15px;
    list-style: none;
    font-weight: 600;
    font-size: 14px;
    color: black;
    transition: 0.3s;
    &:hover{
        color: #551A8B;
    }
`;
export const Sidebar = styled.div`
    width: 90vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
    cursor: default;
    position: fixed;
    top: 0;
    left: ${({display}) => (display ? '0' : '-90vw')};
    z-index: 120;
    background-color: rgba(0,0,0,0.8);
    transition: 0.35s;
`;
export const SideInput = styled(Search)`
    flex: 0;
    height: 24px;
    margin-right: 10px;
    @media(max-width: 800px){
        display: flex;
        
    }
`;
export const SideSearch = styled.form`
    display: flex;
    justify-content: center;
    align-items: center ;
    margin-bottom: 15px;
`;
export const SideMenu = styled(NavMenu)`
    flex-direction: column;
`;
export const SideItem = styled(NavItem)`
    color: white;
    margin: 15px;
    font-weight: 600;
    font-size: 20px;
`;