import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

const linkStyle = {
  marginLeft: "0.5rem",
  textDecoration: "none",
  color: "#526eff",
};

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Clicou, meu PEIXE!!!");
  }

  return (
    <div className="wrapper">
      <div className="mainContainer">
        <S.H1>Faça o seu Login</S.H1>

        <S.Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </S.Form>

        <p>
          Ainda não tem uma conta?
          <Link to="/register" style={linkStyle}>
            Criar uma conta
          </Link>
        </p>
      </div>
    </div>
  );
}
