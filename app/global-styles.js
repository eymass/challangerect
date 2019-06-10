import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: AccordMedium;
    src: url('./fonts/AccordMedium.woff');
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'AccordMedium', sans-serif;
    background-color: white;
  }

  body.fontLoaded {
        font-family: 'AccordMedium', sans-serif;
  }

  #app {
    background-color: white;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
