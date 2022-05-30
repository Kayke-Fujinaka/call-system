import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/auth";

import * as S from "./styles";

import InputSign from "../../Components/InputSign";
import ButtonSign from "../../Components/ButtonSign";

const linkStyle = {
  marginLeft: "0.5rem",
  textDecoration: "none",
  color: "#526eff",
};

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (email !== "" && password !== "") {
      signIn(email, password);
    }
  }

  function handleOnChange(value, type) {
    if (type === "email") {
      setEmail(value);
      return;
    }
    setPassword(value);
  }

  return (
    <div className="wrapper">
      <div className="mainContainer">
        <S.H1>Faça o seu Login</S.H1>

        <S.Form onSubmit={handleSubmit}>
          <InputSign
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            handleOnChange={(e) => handleOnChange(e.target.value, `email`)}
          />
          <InputSign
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            handleOnChange={(e) => handleOnChange(e.target.value, `password`)}
          />
          <ButtonSign type="submit">
            {loadingAuth ? "Carregando..." : "Entrar"}
          </ButtonSign>
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
