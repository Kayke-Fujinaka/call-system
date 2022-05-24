import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../Components/Header";
import Title from "../../Components/Title";

import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from "react-icons/fi";

import * as S from "./styles";

export default function Dashboard() {
  const [chamados, setChamados] = useState([]);

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
                <tr>
                  <td data-label="Cliente">Sujeito</td>
                  <td data-label="Assunto">Suporte</td>
                  <td data-label="Status">
                    <span
                      className="badge"
                      style={{ backgroundColor: "#5cb85c" }}
                    >
                      Em aberto
                    </span>
                  </td>
                  <td data-label="Cadastro">24/05/2022</td>
                  <td data-label="#">
                    <button className="action" style={{ backgroundColor: "#3583f6" }}>
                      <FiSearch size={17} color="#FFFFFF" />
                    </button>
                    <button className="action" style={{ backgroundColor: "#f6a935" }}>
                      <FiEdit2 size={17} color="#FFFFFF" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </S.Table>
          </>
        )}
      </div>
    </div>
  );
}
