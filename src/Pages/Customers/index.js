import React, { useState } from "react";
import firebase from "../../Services/firebaseConnection";

import Header from "../../Components/Header";
import Title from "../../Components/Title";

import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";

import * as S from "./styles";

export default function Customers() {
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [cnpjEmpresa, setCnpjEmpresa] = useState("");
  const [enderecoEmpresa, setEnderecoEmpresa] = useState("");

  async function handleAdd(e) {
    e.preventDefault();

    if (nomeEmpresa !== "" && cnpjEmpresa !== "" && enderecoEmpresa !== "") {
      await firebase
        .firestore()
        .collection("customers")
        .add({
          nomeEmpresa: nomeEmpresa,
          cnpj: cnpjEmpresa,
          endereço: enderecoEmpresa,
        })
        .then(() => {
          setNomeEmpresa("");
          setCnpjEmpresa("");
          setEnderecoEmpresa("");
          toast.info("Cadastrada com Sucesso!", {
            theme: "colored",
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Erro ao Cadastrar!", {
            theme: "colored",
          });
        });
    } else {
      toast.error("Preencha Todos os Campos!", {
        theme: "colored",
      });
    }
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>

        <S.Container>
          <form className="form-profile customers" onSubmit={handleAdd}>
            <label>Nome da Empresa</label>
            <input
              type="text"
              value={nomeEmpresa}
              placeholder="Digite o Nome da sua Empresa"
              onChange={(e) => setNomeEmpresa(e.target.value)}
            />

            <label>CNPJ</label>
            <input
              type="text"
              value={cnpjEmpresa}
              placeholder="Digite o CNPJ da sua Empresa"
              onChange={(e) => setCnpjEmpresa(e.target.value)}
            />

            <label>Endereço da Empresa</label>
            <input
              type="text"
              value={enderecoEmpresa}
              placeholder="Digite o Endereço da sua Empresa"
              onChange={(e) => setEnderecoEmpresa(e.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </form>
        </S.Container>
      </div>
    </div>
  );
}
