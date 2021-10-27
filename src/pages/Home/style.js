import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
`;
export const SliderSection = styled.section`
    width: 100%;
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center ;

    overflow: hidden;
    position: relative;
    padding-top: 50px;
`;
export const NavegationLeft = styled.div`
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center ;

    position: absolute;
    top: 50%;
    left: 5px;

    z-index: 10;
    cursor: pointer;
    font-size: 32px;
    color: rgba(0,0,0,0,8);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    &:hover{
        background-color: rgba(255, 255, 255, 1);
    }
`;
export const NavegationRight = styled(NavegationLeft)` 
    left: calc(100% - 45px);
`;
export const Sliders = styled.div`
    
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center ;
    
    flex: 1;
    
`;
export const Slide = styled.div`
    width: 100vw;
    height: 100%;
    
    transition:  all ease-in 0.5s;
    transform: translateX(${({translate}) => translate}vw);
    background-color: ${ ({bg}) => bg } ;
    padding: 10px;
    padding-top: 30px;

    display: flex;
    justify-content: space-evenly;
    align-items: center ;

    img{
        height: 50vh;
        border-radius: 5% 5% 100px 20px;
        z-index: 10;
        box-shadow: 0 2px 5px gray;
        position: relative;
        object-fit: cover;
        object-position: center;
    };
    span{
        position: absolute;
        top: 55%;
        left: 55%;
        width: 30vw;
        height: 20vh;
        border-radius:100px;
        background-color: #FED800 ;
        font-size: 30px;
        font-weight: 600;
        padding-left: 30px;
        color: black;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        hr{
            width: 70px;
            height: 1px;
            border: none;
            background-color: black;
            position: absolute;
            top: 62%;
            left: 40px;
            z-index: 11;
        }
    };
    div{
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center ;
        flex-direction: column;
    };
    h3{
        font-size: 34px;
        text-transform: uppercase;
        margin-bottom: 16px;
        font-weight: 600;
        color: black;
    };
    p{
        width: 60%;
        font-size: 14px;
        text-align: center;
        font-weight: 400;
        margin-bottom: 28px;
        color: black;
    };
    button{
        padding: 6px 12px;
        color: black;
        cursor: pointer;
        background: transparent ;
        text-transform: uppercase;
        border: 1px solid black;
        border-radius: 10%;
        transition: 0.3s;
        &:hover{
            opacity: 0.9;
            background: black;
            color: white;
        }
    }

`;
export const Destaques = styled.section`
    width: 100%;
    height: 100vh;
    padding: 40px 10px;

    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;

    div{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center ;
        margin-bottom: 40px;
        h2{
            flex: 1;
            text-align: center;
            font-size: 20px;
            padding: 3px;
            color: black;
            text-transform: uppercase;
            background-color: #FFFFFF;
        };
        hr{
            flex: 1;
            height: 2px;
            background-color: black;
        };
    }

    article{
        width: 90%;
        height: 70vh;

        display: flex;
        justify-content: center;
        align-items: center ;
    };    
`;
export const DestaquesItem = styled.div`
    width: 40%;
    height: 70vh;

    margin: 3px;
    position: relative;
    overflow: hidden;
    img{
        object-fit: cover;
        width: 100%;
        height: 70vh;
    };
    div{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center ;
        flex-direction: column;
        background-color: rgba(0,0,0,0.2) ;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            background-color: rgba(0,0,0,0.3);
            transform: scale(1.3);
        }
    };
    h3{
        color: white;
        z-index: 10;
        margin-bottom: 20px;
        text-transform: uppercase;
    };
    button{
        padding: 6px 12px;
        color: black;
        cursor: pointer;
        background: #FED800 ;
        text-transform: uppercase;
        border: none;
        border-radius: 10%;
        transition: 0.3s;
        &:hover{
            opacity: 0.9;
            background: black;
            color: white;
        }
    }
`;
export const Credibility = styled.section`
    width: 100%;
    height: 15vh;

    display: flex;
    justify-content: center;
    align-items: center ;
    margin-top: 20px;
    div{
        width: 90%;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center ;
        background-color: #EFEFEF;
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
                transition: 0.3s;
                opacity: 0.8;
                cursor: pointer;
                &:hover{
                    opacity: 1;
                }
            };
        };
    };
`;
export const Products = styled.section`
    width: 100%;
    min-height: 100vh;

    background-color:#F7F7F7;
    padding: 60px 0;

    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;

    div{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center ;
        flex-direction : row;
        flex-wrap: wrap;
    };
    span{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center ;
        margin-bottom: 40px;
        h2{
            flex: 1;
            text-align: center;
            font-size: 20px;
            padding: 3px;
            color: black;
            text-transform: uppercase;
        };
        hr{
            flex: 1;
            height: 2px;
            background-color: black;
        };
    }
`;
