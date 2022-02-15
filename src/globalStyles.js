import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Outfit', sans-serif;
  }

  body {
    background: hsl(217, 54%, 11%);
    min-height: 100vh;
    color: hsl(215, 51%, 70%);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p{
    font-size: 18px;
  }

`;

export default GlobalStyle;
