import React, { useState, useContext } from "react";
import { FiSettings, FiUpload } from "react-icons/fi";

import Header from "../../Components/Header";
import Title from "../../Components/Title";

import { AuthContext } from "../../Context/auth";
import firebase from "../../Services/firebaseConnection";
import avatar from "../../Assets/avatar.png";

import * as S from "./styles";

export default function Profile() {
  const { user, signOut, setUser, userStorage } = useContext(AuthContext);

  const [nome, setNome] = useState(user && user.nome);
  const [email, setEmail] = useState(user && user.email);
  const [avatarURL, setAvatarURL] = useState(user && user.avatarURL);
  const [imageAvatar, setImageAvatar] = useState(null);

  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || "image/png" || "image/jpg") {
        setImageAvatar(image);
        setAvatarURL(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem no formato PNG, JPEG ou JPG");
        setImageAvatar(null);
        return null;
      }
    }
  }

  async function handleUpload() {
    const currentUid = user.uid;

    const uploadTask = await firebase
      .storage()
      .ref(`images/${currentUid}/${imageAvatar.name}`)
      .put(imageAvatar)
      .then(async () => {
        console.log("Foto foi enviada com sucesso!");

        await firebase
          .storage()
          .ref(`images/${currentUid}`)
          .child(imageAvatar.name)
          .getDownloadURL()
          .then(async (url) => {
            let urlImage = url;

            await firebase
              .firestore()
              .collection("users")
              .doc(user.uid)
              .update({
                avatarURL: urlImage,
                nome: nome,
              })
              .then(() => {
                let data = {
                  ...user,
                  avatarURL: urlImage,
                  nome: nome,
                };
                setUser(data);
                userStorage(data);
              });
          });
      });
  }

  async function handleSave(e) {
    e.preventDefault();

    if (imageAvatar === null && nome !== "") {
      await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .update({
          nome: nome,
        })
        .then(() => {
          let data = {
            ...user,
            nome: nome,
          };
          setUser(data);
          userStorage(data);
        });
    } else if (nome !== "" && imageAvatar !== null) {
      handleUpload();
    }
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Configurações">
          <FiSettings size={25} />
        </Title>

        <S.Container>
          <form className="form-profile" onSubmit={handleSave}>
            <S.AvatarLabel>
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>
              <input type="file" accept="image/*" onChange={handleFile} />{" "}
              <br />
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
