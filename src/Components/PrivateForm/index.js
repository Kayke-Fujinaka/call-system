import React from "react";

import * as S from "./styles";

export default function PrivateForm({ handleSave, children }) {
  return <S.PrivateForm onSubmit={handleSave}>{children}</S.PrivateForm>;
}
