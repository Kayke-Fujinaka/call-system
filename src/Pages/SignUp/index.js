import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/auth";
import { toast } from "react-toastify";

import SignTitle from "../../Components/SignTitle";
import SignForm from "../../Components/SignForm";
import SignInput from "../../Components/SignInput";
import SignButton from "../../Components/SignButton";

const linkStyle = {
  marginLeft: "0.5rem",
  textDecoration: "none",
  color: "#526eff",
};

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (nome !== "" && email !== "" && password !== "") {
      signUp(email, password, nome);
    } else {
      toast.error("Ops! Preencha os campos!", {
        theme: "dark",
      });
    }
  }

  function handleOnChange(value, type) {
    if (type === "email") {
      setEmail(value);
      return;
    }
    if (type === "name") {
      setNome(value);
      return;
    }
    setPassword(value);
  }

  return (
    <div className="wrapper">
      <div className="mainContainer">
        <SignTitle>Faça o seu Registro</SignTitle>

        <SignForm handleSubmit={handleSubmit}>
          <SignInput
            type="text"
            name="name"
            placeholder="Nome"
            autoComplete="off"
            value={nome}
            handleOnChange={(e) => handleOnChange(e.target.value, `name`)}
          />
          <SignInput
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            handleOnChange={(e) => handleOnChange(e.target.value, `email`)}
          />
          <SignInput
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            handleOnChange={(e) => handleOnChange(e.target.value, `password`)}
          />
          <SignButton type="submit">{loadingAuth ? "Carregando..." : "Cadastrar"}</SignButton>
        </SignForm>

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
