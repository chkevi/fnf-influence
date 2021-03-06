import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box; 
  outline: none;
}

body{
  font-family: "'Noto Sans KR', sans-serif;";
  color: #212121;
}

img{
  width: 100%;
  height: 100%;
}

`;

export default GlobalStyle;
