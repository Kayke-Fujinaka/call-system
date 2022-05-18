import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/auth";

import * as S from "./styles";

const linkStyle = {
  marginLeft: "0.5rem",
  textDecoration: "none",
  color: "#526eff",
};

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    
    if(nome !== '' && email !== '' && password !== ''){
      signUp(email, password, nome)
    }
  }

  return (
    <div className="wrapper">
      <div className="mainContainer">
        <S.H1>Faça o seu Registro</S.H1>

        <S.Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            autoComplete="off"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
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
          <button type="submit">Cadastrar</button>
        </S.Form>

        <p>
          Você já possui uma conta?
          <Link to="/" style={linkStyle}>
            Entrar na sua conta
          </Link>
        </p>
      </div>
    </div>
  );
}
