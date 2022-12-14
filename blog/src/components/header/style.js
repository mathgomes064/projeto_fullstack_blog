import styled from "styled-components"

export const Head = styled.header`


    .divUm{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1E90FF;
        width: 100%;
        height: 68px;

    }

    .divDois{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #1E90FF;
        width: 90%;
        height: 68px;
    }

    .divDois > button{
        width: 152px;
        height: 38px;
        border: none;
        border-radius: 20px;
        background-color: #5C5D8D;
        color: #FFFFFF;
        cursor: pointer;
    }

    .divDois > button:hover{
        background-color: gray;
        transition: 144ms;
        cursor: pointer;
    }

    .divTres{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 20%;
        height: 68px;
        background-color: #1E90FF;
    }

    .divTres > .dadosDePerfil{
        width: 100%;
        height: 68px;
        display: flex;
        align-items: center;
        background-color: #1E90FF;
    }

    .divTres > .dadosDePerfil > img{
        width: 50px;
        height: 50px;
        border-radius: 100px;
    }

    .divTres > .dadosDePerfil > p{
        padding-left: 10px;
        background-color: #1E90FF;
        color: #FFFFFF;
    }
`;