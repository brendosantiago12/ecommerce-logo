import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardDestaques = styled.article`
    width: 260px;
    height: 60vh;
    text-decoration: none;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    margin: 4px 8px;
    position: relative;
    cursor: pointer;
    border-radius: 8px;
    background-color:white;
    
    span{
        max-width: 30px;
        min-width: 30px;
        min-height: 65px;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 3px;
        top:10px;
        left: 225px;
        z-index: 10;
        transition: all ease-in 0.3s;
        display: none;
        justify-content:center;
        align-items: center;
        flex-direction:column;
        cursor: pointer;
        i{
            color: green;
            font-size: 15px;
            font-weight: 600;
            opacity: 0.5;
            transition: all ease-in 0.3s;
            &:hover{
                opacity: 1;
                transform: scale(1.2);
            }
        }
    };
    &:hover{
        span{
            display: flex;
        }
    }
`;
export const ContentIcons = styled(CardDestaques)`
    width: 50%;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background-color:gray;
    opacity: 0.5;
    display: none;
`;
export const CardDestaquesImg = styled.div`
width: 100%;
height: 80%;
border-radius: 8px;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all ease-in 0.3s;
    &:hover{
    transform: scale(1.1);
    }
}
`;
export const CardDestaquesTxt = styled.div`
width: 100%;
height: 20%;
padding: 4px;
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
`;
export const CardDestaquesTitle = styled.h4`
width: 100%;
text-align: center;
color: rgba(0, 0, 0, 0.8);
font-size: 12px;
font-weight: 600;
margin: 3px 0;
`;
export const Price = styled.p`
    width: 100%;
    font-size: 14px;
    color: green;
    opacity: 0.7;
    text-align: center;
`