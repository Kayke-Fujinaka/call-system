import React, { useState } from "react";

import Header from "../../Components/Header";
import Title from "../../Components/Title";

import { FiUser } from "react-icons/fi";

// import * as S from "./styles";

export default function Customers() {
  const [ nomeEmpresa, setNomeEmpresa ] = useState('')
  const [ cnpjEmpresa, setCnpjEmpresa ] = useState('')
  const [ enderecoEmpresa, setEnderecoEmpresa ] = useState('')

  function handleAdd(e) {
    e.preventDefault()
    alert("Teste")
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>
        
        <div>
          <form className="form-profile customers" onSubmit={handleAdd}>
            <label>Nome da Empresa</label>
            <input type="text" value={nomeEmpresa} placeholder="Digite o Nome da sua Empresa" onChange={ (e) => setNomeEmpresa(e.target.value)} />

            <label>CNPJ</label>
            <input type="text" value={cnpjEmpresa} placeholder="Digite o CNPJ da sua Empresa" onChange={ (e) => setCnpjEmpresa(e.target.value)} />

            <label>Endereço da Empresa</label>
            <input type="text" value={enderecoEmpresa} placeholder="Digite o Endereço da sua Empresa" onChange={ (e) => setEnderecoEmpresa(e.target.value)} />

            <button type="submit">Cadastrar Empresa</button>
          </form>
        </div>
         
      </div>
    </div>
  );
}
