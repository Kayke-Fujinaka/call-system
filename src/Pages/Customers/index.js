import React, { useState } from "react";
import firebase from "../../Services/firebaseConnection";

import Header from "../../Components/Header";
import Content from "../../Components/Content";
import Container from "../../Components/Container";
import Title from "../../Components/Title";
import PrivateForm from "../../Components/PrivateForm";
import Label from "../../Components/PrivateLabel";
import PrivateButton from "../../Components/PrivateButton";

import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";

export default function Customers() {
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [cnpjEmpresa, setCnpjEmpresa] = useState("");
  const [enderecoEmpresa, setEnderecoEmpresa] = useState("");

  async function handleSave(e) {
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

      <Content>
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>

        <Container>
          <PrivateForm handleSave={handleSave}>
            <Label>Nome da Empresa</Label>
            <input
              type="text"
              value={nomeEmpresa}
              placeholder="Digite o Nome da sua Empresa"
              onChange={(e) => setNomeEmpresa(e.target.value)}
            />

            <Label>CNPJ</Label>
            <input
              type="text"
              value={cnpjEmpresa}
              placeholder="Digite o CNPJ da sua Empresa"
              onChange={(e) => setCnpjEmpresa(e.target.value)}
            />

            <Label>Endereço da Empresa</Label>
            <input
              type="text"
              value={enderecoEmpresa}
              placeholder="Digite o Endereço da sua Empresa"
              onChange={(e) => setEnderecoEmpresa(e.target.value)}
            />

            <PrivateButton type="submit">Cadastrar</PrivateButton>
          </PrivateForm>
        </Container>
      </Content>
    </div>
  );
}
