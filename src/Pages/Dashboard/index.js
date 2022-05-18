import React, { useContext } from "react";
import { AuthContext } from "../../Context/auth";

import * as S from "./styles";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <div>
      <h1>Página de Dashboard</h1>
      <button onClick={() => signOut()}>Sair da conta</button>
    </div>
  );
}
