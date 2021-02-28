import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body {
    height: 100%;
    position: relative;
    min-height: 100vh;
}
  body:after {
    content: "";
    background: url(${require(`../public/images/sea-beach.jpg`)});
    background-size: cover;
    opacity: 0.35;
    top: 0;
    left: 0;
    display: inline-block;
    height: 100%;
    width: 100vw;
    position: absolute;
    z-index: -1;
    background-attachment: fixed;
    background-repeat: no-repeat
  }
`
