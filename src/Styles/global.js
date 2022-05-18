import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
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

ul, li {
    list-style: none;
}

button {
    cursor: pointer;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #1C1E28;
    color: ${theme.white};
}

.mainContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 3.5rem;
    background-color: #191921;
    border-radius: 1rem;
    @media (min-width: 600px) {
        width: min(60rem, 100%);
        height: min(55rem, 100%);
    }
}

`;

export default GlobalStyle;
