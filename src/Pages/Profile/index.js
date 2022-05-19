import React from "react";

import Header from "../../Components/Header"
import Title from "../../Components/Title"

import { FiSettings } from "react-icons/fi"

import * as S from "./styles";

export default function Profile() {
  return (
    <div>
      <Header />
      
      <div className="content">
        <Title name="Meu perfil">
          <FiSettings size={25} />
        </Title>
      </div>
    </div>
  );
}
