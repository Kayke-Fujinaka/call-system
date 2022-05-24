import React from "react";

import Header from "../../Components/Header";
import Title from "../../Components/Title";

import { FiPlusCircle } from "react-icons/fi";

import * as S from "./styles";

export default function New() {
  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Novo Chamado">
          <FiPlusCircle size={25} />
        </Title>

        <S.Container>
          <form className="form-profile">
            <label>Cliente</label>
            <select>
              <option key={1} value={1}>
                Sujeito Programador
              </option>
            </select>

            <label>Assunto</label>
            <select>
              <option value="Suporte">Suporte</option>
              <option value="Visita Tecnica">Visita Tecnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input type="radio" name="radio" value="Aberto" />
              <span>Em Aberto</span>

              <input type="radio" name="radio" value="Progresso" />
              <span>Progresso</span>

              <input type="radio" name="radio" value="Atendido" />
              <span>Atendido</span>
            </div>

            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreve o seu problema (Opcional)"
            />

            <button type="submit">Registrar</button>
          </form>
        </S.Container>
      </div>
    </div>
  );
}
