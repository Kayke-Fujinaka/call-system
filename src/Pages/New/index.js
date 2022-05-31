import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/auth";
import { useHistory, useParams } from "react-router-dom";
import firebase from "../../Services/firebaseConnection";

import Header from "../../Components/Header";
import Content from "../../Components/Content";
import Container from "../../Components/Container";
import Title from "../../Components/Title";
import PrivateForm from "../../Components/PrivateForm";
import Label from "../../Components/PrivateLabel";
import PrivateButton from "../../Components/PrivateButton";

import { FiPlusCircle } from "react-icons/fi";
import { toast } from "react-toastify";

import * as S from "./styles";

export default function New() {
  const { id } = useParams();
  const history = useHistory();

  const [loadCustomer, setLoadCustomers] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [customerSelected, setCustomersSelected] = useState(0);

  const [assunto, setAssunto] = useState("Suporte");
  const [status, setStatus] = useState("Aberto");
  const [complemento, setComplemento] = useState("");

  const [idCostumer, setIdCostumer] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function loadCustomers() {
      await firebase
        .firestore()
        .collection("customers")
        .get()
        .then((snapshot) => {
          let lista = [];

          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              nomeEmpresa: doc.data().nomeEmpresa,
            });
          });

          if (lista.length === 0) {
            console.log("Nenhuma empresa encontrada!");
            setCustomers([{ id: "1", nomeEmpresa: "FREELA" }]);
            setLoadCustomers(false);
            return;
          }

          setCustomers(lista);
          setLoadCustomers(false);

          if (id) {
            loadId(lista);
          }
        })
        .catch((error) => {
          console.log("Deu algum erro", error);
          setLoadCustomers(false);
          setCustomers([{ id: "1", nomeEmpresa: "" }]);
        });
    }

    loadCustomers();
  }, []);

  async function loadId(lista) {
    await firebase
      .firestore()
      .collection("chamados")
      .doc(id)
      .get()
      .then((snapshot) => {
        setAssunto(snapshot.data().assunto);
        setStatus(snapshot.data().status);
        setComplemento(snapshot.data().complemento);

        let index = lista.findIndex(
          (item) => item.id === snapshot.data().clienteId
        );
        setCustomersSelected(index);
        setIdCostumer(true);
      })
      .catch((error) => {
        console.log("Erro no Id passado", error);
        setIdCostumer(false);
      });
  }

  async function handleSave(e) {
    e.preventDefault();

    if (idCostumer) {
      await firebase
        .firestore()
        .collection("chamados")
        .doc(id)
        .update({
          cliente: customers[customerSelected].nomeEmpresa,
          clienteId: customers[customerSelected].id,
          assunto: assunto,
          status: status,
          complemento: complemento,
          userId: user.uid,
        })
        .then(() => {
          toast.success("Chamado editado com sucesso!", {
            theme: "colored",
          });
          setCustomersSelected(0);
          setComplemento("");
          history.push("/dashboard");
        })
        .catch((error) => {
          toast.error("Erro ao editar", {
            theme: "colored",
          });
          console.log(error);
        });

      return;
    }

    await firebase
      .firestore()
      .collection("chamados")
      .add({
        created: new Date(),
        cliente: customers[customerSelected].nomeEmpresa,
        clienteId: customers[customerSelected].id,
        assunto: assunto,
        status: status,
        complemento: complemento,
        userId: user.uid,
      })
      .then(() => {
        toast.success("Chamado registrado com sucesso!", {
          theme: "colored",
        });
        setComplemento("");
        setCustomersSelected(0);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ops, ocorreu algum erro. Tente novamente!", {
          theme: "colored",
        });
      });
  }

  // Chamada Quando Troca o Assunto
  function handleChangeSelect(e) {
    setAssunto(e.target.value);
  }

  // Chamada Quando Troca o Status
  function handleOptionChange(e) {
    setStatus(e.target.value);
  }

  // Chamada Quando Troca de Cliente
  function handleChangeCustomers(e) {
    setCustomersSelected(e.target.value);
  }

  return (
    <div>
      <Header />

      <Content>
        <Title name="Novo Chamado">
          <FiPlusCircle size={25} />
        </Title>

        <Container>
          <PrivateForm handleSave={handleSave}>
            <Label>Cliente</Label>

            {loadCustomer ? (
              <input
                type="text"
                disabled={true}
                value="Carregando Clientes..."
              />
            ) : (
              <select value={customerSelected} onChange={handleChangeCustomers}>
                {customers.map((item, index) => {
                  return (
                    <option key={item.id} value={index}>
                      {item.nomeEmpresa}
                    </option>
                  );
                })}
              </select>
            )}

            <Label>Assunto</Label>
            <select value={assunto} onChange={handleChangeSelect}>
              <option value="Suporte">Suporte</option>
              <option value="Visita Tecnica">Visita Tecnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <Label>Status</Label>
            <div className="status">
              <input
                type="radio"
                name="radio"
                value="Aberto"
                onChange={handleOptionChange}
                checked={status === "Aberto"}
              />
              <span>Em Aberto</span>

              <input
                type="radio"
                name="radio"
                value="Progresso"
                onChange={handleOptionChange}
                checked={status === "Progresso"}
              />
              <span>Progresso</span>

              <input
                type="radio"
                name="radio"
                value="Atendido"
                onChange={handleOptionChange}
                checked={status === "Atendido"}
              />
              <span>Atendido</span>
            </div>

            <Label className="complemento">Complemento</Label>
            <textarea
              type="text"
              placeholder="Descreve o seu problema (Opcional)"
              value={complemento}
              maxLength="500"
              onChange={(e) => setComplemento(e.target.value)}
            />

            <PrivateButton type="submit">Registrar</PrivateButton>
          </PrivateForm>
        </Container>
      </Content>
    </div>
  );
}
