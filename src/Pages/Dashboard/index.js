import React, { useState } from "react";
import { Link } from 'react-router-dom'

import Header from "../../Components/Header";
import Title from "../../Components/Title";

import { FiMessageSquare, FiPlus } from "react-icons/fi";

import * as S from "./styles";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Chamados">
          <FiMessageSquare size={25} />
        </Title>

        <S.Container>
          <span>Nenhum chamado registrado...</span>

          <Link to="/new" className="new">
            <FiPlus size={25} color="#FFFFFF" />
            Novo chamado
          </Link>
        </S.Container>
      </div>
    </div>
  );
}
