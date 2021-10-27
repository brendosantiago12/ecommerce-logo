import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;

    display:flex;
    justify-content:center;
    align-items: center ;
    flex-direction: column;

    padding-top: 30px;
    padding-bottom: 30px;
    background-color:#F7F7F7;
`;

export const Credibility = styled.section`
    width: 100%;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center ;
    margin-bottom: 40px;
    div{
        width: 90%;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center ;
        background-color: white;
        padding: 0 10px;
        
        div{
            display: flex;
            justify-content: center;
            align-items: center ;
            text-align: center;
            span{
                font-size: 30px;
                color: black;
                margin: auto 0;
            };
            p{
                font-size: 18px;
                color: black;
                margin-left:  5px;
            };
        };
    };
`;
export const Container = styled.div`
    width: 90%;
    min-height: 100vh;

    display:flex;
    justify-content:center;
    align-items: flex-start ;
    flex-direction: row;
`
export const AllProducts = styled.div`
    flex: 4;
    min-height: 100vh;

    display:flex;
    justify-content:center;
    align-items: center ;
    flex-direction: row;
    flex-wrap: wrap;

    margin-left: 20px;
    
`;
export const Filters = styled.nav`
    flex: 1;
    min-height: 30vh;
    background-color: gray;
    display: flex;
    justify-content:center;
    flex-direction: column;
    padding: 16px;
    position: sticky;
    top: 20px;
    border-radius: 8px;
    background-color:white;

    h3{
        font-size: 24px;
        color: #FF6A28;
        opacity: 0.9;
        margin-bottom: 20px;
    };
    ul{
        width: 100%;
        padding: 0 8px;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        opacity: 0.7;

        li{
            width: calc(100% + 24px) ;
            padding: 12px 8px;
            color: black;
            list-style: none;
            text-transform: uppercase;
            opacity: 0.8;
            font-size: 14px;
            list-style: none;
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-bottom: 4px;
            transition: 0.3s;
            border-bottom: 2px solid #F7F7F7;
            &:hover{
                background-color: #F7F7F7;
                opacity: 1;
                color: #FF6A28;
            }
        };
    };
`;