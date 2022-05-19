import React, { useContext } from "react";
import { AuthContext } from "../../Context/auth";
import { Link } from "react-router-dom";

import avatar from "../../Assets/avatar.png";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";

import * as S from "./styles";

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <S.Sidebar>
      <S.HeaderImgWrapper>
        <img
          src={user.avatarURL === null ? avatar : user.avatarURL}
          alt="User avatar"
        />
      </S.HeaderImgWrapper>

      <Link to="/dashboard">
        <FiHome color="#FFF" size={24} />
        Chamados
      </Link>
      <Link to="/customers">
        <FiUser color="#FFF" size={24} />
        Clientes
      </Link>
      <Link to="/profile">
        <FiSettings color="#FFF" size={24} />
        Configurações
      </Link>
    </S.Sidebar>
  );
}
