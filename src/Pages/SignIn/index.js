import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

const linkStyle = {
  marginLeft: "0.5rem",
  textDecoration: "none",
  color: '#526eff'
};

export default function SignIn() {
  return (
    <div className="wrapper">
      <div className="mainContainer">
        <S.H1>Faça o seu login</S.H1>

        <S.Form>
          <input type="text" name="email" placeholder="Email" autocomplete="off" />
          <input type="password" name="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </S.Form>

        <p>Ainda não tem uma conta?<Link to="/register" style={linkStyle}>Criar uma conta</Link></p>
      </div>
    </div>
  );
}
