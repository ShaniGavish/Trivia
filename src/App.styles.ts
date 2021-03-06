import styled, {createGlobalStyle} from "styled-components";
import BGImage from './images/background.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding:  20px 400px;
        display: flex;
        justify-content: flex-start;
       
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Fascinate Inline', cursive;;
        background-image: linear-gradient(180deg, #F1B918, #fff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-background-clip: transparent;
        filter: drop-shadow(2px 2px #F1B918);
        font-weight: 400;
        font-size: 100px;
        text-align: center;
        margin: 20px;
        letter-spacing: 0.1em;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #F1B918);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }

`