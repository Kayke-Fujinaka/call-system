import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:focus {
    outline: 0;
}

:root {
    font-size: 62.5%;
}

html, body, #root {
    height: 100%;
}

body {
    font: 1.4rem 'Roboto', sans-serif;
    background-color: ${theme.white3};
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    cursor: pointer;
}

`;

export default GlobalStyle;
