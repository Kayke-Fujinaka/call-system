import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../../Services/firebaseConnection";
import { format } from "date-fns";

import Header from "../../Components/Header";
import Title from "../../Components/Title";
import Modal from "../../Components/Modal";

import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from "react-icons/fi";

import * as S from "./styles";

const listRef = firebase
  .firestore()
  .collection("chamados")
  .orderBy("created", "desc");

export default function Dashboard() {
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [lastDocs, setLastDocs] = useState();

  const [showPostModal, setShowPostModal] = useState(false);
  const [detail, setDetail] = useState();

  useEffect(() => {
    async function loadChamados() {
      await listRef
        .limit(5)
        .get()
        .then((snapshot) => {
          updateState(snapshot);
        })
        .catch((error) => {
          console.log("Ocorreu algum erro:", error);
          setLoadingMore(false);
        });

      setLoading(false);
    }

    loadChamados();

    return () => {};
  }, []);

  async function updateState(snapshot) {
    const isCollectionEmpty = snapshot.size === 0;

    if (!isCollectionEmpty) {
      let list = [];

      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          assunto: doc.data().assunto,
          cliente: doc.data().cliente,
          clienteId: doc.data().clienteId,
          created: doc.data().created,
          createdFormated: format(doc.data().created.toDate(), "dd/MM/yyyy"),
          status: doc.data().status,
          complemento: doc.data().complemento,
        });
      });

      const lastDoc = snapshot.docs[snapshot.docs.length - 1]; //Pegando último documento listado

      setChamados(list);
      setLastDocs(lastDoc);
    } else {
      setIsEmpty(true);
    }

    setLoadingMore(false);
  }

  async function handleMore() {
    setLoadingMore(true);
    await listRef
      .startAfter(lastDocs)
      .limit(5)
      .get()
      .then((snapshot) => {
        updateState(snapshot);
      });
  }

  function togglePostModal(item) {
    setShowPostModal(!showPostModal); //troca de true pra false
    setDetail(item);
  }

  if (loading) {
    return (
      <div>
        <Header />
        <div className="content">
          <Title name="Chamados">
            <FiMessageSquare size={25} />
          </Title>

          <S.Container>
            <span>Buscando chamados...</span>
          </S.Container>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Chamados">
          <FiMessageSquare size={25} />
        </Title>

        {chamados.length === 0 ? (
          <S.Container>
            <span>Nenhum chamado registrado...</span>

            <Link to="/new" className="new">
              <FiPlus size={25} color="#FFFFFF" />
              Novo chamado
            </Link>
          </S.Container>
        ) : (
          <>
            <Link to="/new" className="new">
              <FiPlus size={25} color="#FFFFFF" />
              Novo chamado
            </Link>

            <S.Table>
              <thead>
                <tr>
                  <th scope="col">Cliente</th>
                  <th scope="col">Assunto</th>
                  <th scope="col">Status</th>
                  <th scope="col">Cadastrado em</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                {chamados.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td data-label="Cliente">{item.cliente}</td>
                      <td data-label="Assunto">{item.assunto}</td>
                      <td data-label="Status">
                        <span
                          className="badge"
                          style={{
                            backgroundColor:
                              item.status === "Aberto" ? "#5cb85c" : "#999",
                          }}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td data-label="Cadastro">{item.createdFormated}</td>
                      <td data-label="#">
                        <button
                          className="action"
                          style={{ backgroundColor: "#3583f6" }}
                          onClick={() => togglePostModal(item)}
                        >
                          <FiSearch size={17} color="#FFFFFF" />
                        </button>
                        <Link
                          className="action"
                          style={{ backgroundColor: "#f6a935" }}
                          to={`/new/${item.id}`}
                        >
                          <FiEdit2 size={17} color="#FFFFFF" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </S.Table>

            {loadingMore && (
              <h3 style={{ textAlign: "center", marginTop: 15 }}>
                Buscando dados...
              </h3>
            )}
            {!loadingMore && !isEmpty && (
              <S.BtnMore
                onClick={() => {
                  handleMore();
                }}
              >
                Buscar mais
              </S.BtnMore>
            )}
          </>
        )}
      </div>

      {showPostModal && <Modal conteudo={detail} close={togglePostModal} />}
    </div>
  );
}
