import styled from 'styled-components'

export const FooterBar = styled.footer`
    width: 100%;
    min-height: 60vh;

    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
    div{
        width: 100%;
        height: 12vh;

        display: flex;
        justify-content: center;
        align-items: center ;
    };
`;
export const NewsLatter = styled.section`
    width: 100%;
    height: 65vh;

    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;

    background-color: #FCF1ED;
    h2{
        font-size: 30px;
        font-weight: 600;
        color: black;
        text-transform: uppercase;
        text-align: center;
        margin-bottom:20px;
    };
    p{
        font-size: 20px;
        font-weight: 600;
        color: black;
        margin-bottom:30px;
    };
    div{
        width: 50%;
        height: 40px;

        display: flex;
        justify-content: space-between;
        align-items: center ;
        background-color: white;
        input{
            flex: 8;
            height: 100%;
            border: none;
            padding: 10px;
        };
        button{
            flex: 1;
            height: 100%;
            border: none;
            font-size: 20px;
            background-color: #FED800;
            opacity: 0.8;
            cursor: pointer;
            margin-left: 5px;
            transition: all ease-in 0.3s;
            &:hover{
                opacity: 1;
            }
        };
    }
`;