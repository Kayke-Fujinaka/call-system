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
    background-color: ${theme.white2};
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

div.content {
    margin-left: 20rem;
    padding: 0.1rem 1.6rem;
    @media (max-width: 700px) {
        margin-left: 0;
    }
}

.new {
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;

    margin-bottom: 1.5em;
    padding: 0.5em;

    font-size: 1.2em;
    font-weight: 500;
    color: #ffffff;

    border: none;
    border-radius: 0.6rem;
    background-color: #83bf02;

    transition: ease-in 0.1s;

    @media (max-width: 700px) {
        font-size: 1em;
        padding: 0.3em;
    }
  }

.new svg {
    margin-right: 0.5rem;
}

.new:hover {
    filter: brightness(1.05);
}

`;

export default GlobalStyle;
