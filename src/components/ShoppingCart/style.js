import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 40vw;
    height: 100vh;

    display: flex;
    justify-content: space-between;
    align-items: center ;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: calc(100% - 40vw);
    z-index: 9990;
    padding: 20px;
    background-color: rgba(0,0,0,0.7);
    transition: all ease-in 0.3s;
    transform: translateX(${ ({translateX}) => (translateX ? '0' : '45vw') })
    
`;
export const ContentCart = styled.div`
        width: 100%;
        height: 70vh;

        display: flex;
        justify-content: center;
        align-items: center ;
        flex-direction: column;
        overflow-x: hidden;
`;
export const TitleComponent = styled.div`
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center ;
        span{
            position: absolute;
            top: 10px;
            left: -30px;
            padding: 3px;
            cursor: pointer;
            color: white;
            font-size: 24px;
            background-color:rgba(0,0,0,0.7)
        };
        h2{
            font-size: 24px;
            color: white;
            
        };
        i{
            margin-left: 20px;
            font-size: 50px;
            color: white;
            position: relative;
            z-index: 10;
            span{
                padding:0 3px;
                font-size: 15px;
                font-weight: 600;
                border-radius: 5px;
                background-color: yellow;
                color: black;
                top: 0;
                left:70%;
                position: absolute;
                z-index: -1;
                opacity: 0.8;
            };
        };
`;
export const CardItem = styled.article`
    width: 100%;
    height: 90px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: rgba(255,255,255);
    margin-bottom: 5px;

    img{
        width: 90px;
        height: 70px;

        object-fit: cover;
        object-position: center;
    };
    div{
        flex: 2;
        padding: 2px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
        font-size: 15px;
        color: black;
        };
        span{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            p{};
            i{};
        }
    };
    span{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h4{};

    };
    
`;
export const Total = styled.div`
    width: 100%;
    height: 90px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    p{
        flex: 1;
        font-size: 24px;
        color: white;
    }
    span{
        flex: 1;
        font-size: 24px;
        color: yellow;
    }
`; 