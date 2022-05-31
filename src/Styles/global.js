import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`

/* ---------- GLOBAL ---------- */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    &:focus {
    outline: 0;
}
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

/* ---------- SIGN ---------- */

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${theme.backg1};
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
    background-color: ${theme.backg2};
    border-radius: 1rem;
    
    @media (min-width: 600px) {
        width: min(60rem, 100%);
        height: min(55rem, 100%);
    }
}

/* ---------- INPUT, TEXTAREA, SELECT ---------- */

input,
textarea,
select {
    max-width: 60rem;
    margin-bottom: 1em;
    padding: 0.7em;

    border: none;
    border-radius: 0.5rem;
}

input:disabled {
    cursor: not-allowed;
}

textarea {
    height: 10rem;
    resize: none;
}

.status {
      display: flex;
    gap: 0.75rem;
}

/* ---------- SVG (React Icons) ---------- */

svg.plus {
    color: ${theme.white};
    font-size: 2.4rem;
}

/* ---------- NEW (Novo Chamado) ---------- */

.new {
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;

    margin-bottom: 1.5em;
    padding: 0.5em;

    font-size: 1.2em;
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.white};

    border: none;
    border-radius: 0.6rem;
    background-color: #83bf02;

    transition: ease-in 0.1s;

    svg {
    margin-right: 0.5rem;

    &:hover {
    filter: brightness(1.05);
}
}

    @media (max-width: 700px) {
        font-size: 1em;
        padding: 0.3em;
    }
  }
`;

export default GlobalStyle;
