import React, { useState, useContext } from "react";
import { FiSettings, FiUpload } from "react-icons/fi";

import Header from "../../Components/Header";
import Title from "../../Components/Title";

import { AuthContext } from "../../Context/auth";
import avatar from "../../Assets/avatar.png";

import * as S from "./styles";

export default function Profile() {
  const { user, signOut } = useContext(AuthContext);

  const [nome, setNome] = useState(user && user.nome);
  const [email, setEmail] = useState(user && user.email);
  const [avatarURL, setAvatarURL] = useState(user && user.avatarURL);

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Meu perfil">
          <FiSettings size={25} />
        </Title>

        <S.Container>
          <form className="form-profile">
            <S.AvatarLabel>
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>
              <input type="file" accept="image/*" /> <br />
              {avatarURL === null ? (
                <img src={avatar} width="250" height="250" alt="User avatar" />
              ) : (
                <img
                  src={avatarURL}
                  width="250"
                  height="250"
                  alt="User avatar"
                />
              )}
            </S.AvatarLabel>

            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Email</label>
            <input type="text" value={email} disabled={true} />

            <button type="submit">Salvar</button>
          </form>
        </S.Container>

        <S.Container>
          <button className="logout-btn" onClick={() => signOut()}>
            Sair
          </button>
        </S.Container>
      </div>
    </div>
  );
}
