import styled from 'styled-components'

export const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color: #F7F7F7;
`;
export const Container = styled.div`
    width: 85%;
    max-width: 1600px;
    min-height: 90vh;
    padding: 30px 0;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const ContentProduct = styled.div`
    width: 100%;
    min-height: 80vh;
    padding: 30px 20px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: white;
    margin-bottom: 30px;
`;
export const ImageProduct = styled.img`
    flex: 2;
    height: 80vh;
    object-fit: cover;
    object-position: center;
    margin-bottom: 16px;
    @media(max-width: 1000px){
        width: 360px;
    }
    @media(max-width: 800px){
        width: 300px;
    }
    @media(max-width: 600px){
        width: 80%;
        height: 70vh;
    }
    @media(max-width: 400px){
        width: 100%;
    }
`;
export const InfoProduct = styled.div`
    flex: 1;
    height: 100%;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    margin-left: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 5px 32px;
    @media(max-width: 600px){
        width: 80%;
    }
    @media(max-width: 400px){
        width: 100%;
    }
`;
export const InfoProductTitle = styled.h2`
    font-size: 22px;
    color: black;
    margin-bottom: 20px;
    @media(max-width: 800px){
        font-size: 20px;
        font-weight: 200;
    }
`;
export const InfoProductCategory = styled.p`
    font-size: 12px;
    font-weight: 200;
    color: black;
    opacity: 0.5;
    margin-bottom: 16px;
    @media(max-width: 800px){
        font-size: 14px;
        font-weight: 100;
    }
`;
export const InfoProductPrice = styled.span`
    font-size: 20px;
    font-weight: 300;
    color: black;
    margin-bottom: 16px;
    @media(max-width: 800px){
        font-size: 18px;
        font-weight: 100;
    }
`;
export const InfoProductBuy = styled.button`
    width: 100%;
    height: 30px;
    color: black;
    cursor: pointer;
    background: #FED800 ;
    text-transform: uppercase;
    border: none;

    display: flex;
    align-items: center;
    justify-content:center;
    
    margin-bottom: 16px;
    transition: 0.3s;
        &:hover{
            opacity: 0.9;
            background: black;
            color: white;
        }
`;
export const InfoProductAddCart = styled(InfoProductBuy)`
    color: black;
    background-color: #F7F7F7;
`;
export const DetailsProduct = styled.div`
    width: 80%;
    min-height: 20vh;
    padding-top: 28px;
    border-top: 1px solid rgba(0,0,0,0.3);
    opacity: 0.7;
    display: flex;
    margin-bottom: 32px;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    @media(max-width: 600px){
        width: 90%;
        margin-left: 0;
        margin-top: 8px;
    }
`;
export const Details = styled.p`
    font-size: 16px;
    color: black;
    @media(max-width: 600px){
        font-size: 12px;
    }
`;
export const Related = styled.div`
    width: 100%;
    min-height: 70vh;

    display: flex;
    justify-content: center;
    align-items: flex-start ;
    flex-direction: column;

    margin: 30px 0;
    h2{
        font-size: 22px;
        border-left: 1px solid rgba(0,0,0,0.5);
        padding-left: 5px;
        margin: 20px 8px;
        text-align: left;
    };
    div{
        display: flex;
        justify-content: center;
        align-items: center ;
        flex-direction: row;
        flex-wrap: wrap;
    };
`;
