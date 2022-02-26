import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Manrope', sans-serif;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.darkGrayishBlue};

    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

export default GlobalStyle;
