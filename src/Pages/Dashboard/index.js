import React, { useContext } from "react";
import { AuthContext } from "../../Context/auth";

import Header from "../../Components/Header"

import * as S from "./styles";

export default function Dashboard() {
  const { } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <h1>Página de Dashboard</h1>
    </div>
  );
}
