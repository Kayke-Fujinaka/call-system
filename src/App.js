import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import GlobalStyle from './Styles/global'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}
