import { createGlobalStyle } from 'styled-components';
// Theme
import { theme } from '../../theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family:${theme().font.family}
  }
  #root{
    margin:0;
  }
  body {
    display: flex;
    width:100%;
    height: 100vh;
    background-color: ${theme().color.neutralDarkBlueMainBg}
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
