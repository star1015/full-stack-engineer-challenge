import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #003366;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  *[disabled] {
    pointer-events: none;
  }
`;

export default GlobalStyle;
