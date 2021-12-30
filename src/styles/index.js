import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`

html {
scroll-behavior: smooth;
}
  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
export const FlexContainer = styled.div`

  display:flex;
  align-items: ${props=> (props.alignItems??"center") };
  justify-content:${props=> (props.justifyContent??"center") };;
  width:100%;
  height:100%;

`;


