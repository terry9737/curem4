import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
*,::before,::after {
    box-sizing: border-box;
    font-family: 'M PLUS 1p', sans-serif;
}
h1,h2,h3,h4,h5,h6,p {
    margin:0;
    padding:0;
}
ul {
    list-style-type: none;
    padding:0px;
    margin:0px;
}
a {
    text-decoration:none;
}

body {
    font-size: 15px;
    margin: 0px;
    background:white;
    height:200vh;
    position:relative;
}
`;
