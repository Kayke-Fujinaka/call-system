import React, { useContext } from "react";
import { AuthContext } from "../../Context/auth";

import Header from "../../Components/Header"
import Title from "../../Components/Title"

import { FiMessageSquare } from 'react-icons/fi';

import * as S from "./styles";

export default function Dashboard() {
  const { } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <div className="content">
      <Title name="Chamados">
        <FiMessageSquare size={25} />
      </Title>
      </div>
    </div>
  );
}
