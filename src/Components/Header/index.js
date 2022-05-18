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
          src={user.avatarURL !== null ? avatar : user.avatarURL}
          alt="User avatar"
        />
      </S.HeaderImgWrapper>

      <S.IconList>
        <Link to="/dashboard" className="linkItemHeader">
          <li>
            <FiHome className="iconHeader" /> Chamados
          </li>
        </Link>
        <Link to="/customers" className="linkItemHeader">
          <li>
            <FiUser className="iconHeader" /> Clientes
          </li>
        </Link>
        <Link to="/profile" className="linkItemHeader">
          <li>
            <FiSettings className="iconHeader" /> Minha conta
          </li>
        </Link>
      </S.IconList>
    </S.Sidebar>
  );
}
