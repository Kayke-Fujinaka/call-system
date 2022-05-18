import React from "react";
import AuthProvider from "./Context/auth";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import GlobalStyle from "./Styles/global";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </AuthProvider>
  );
}
