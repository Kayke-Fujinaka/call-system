import React from "react";

import * as S from "./styles";

export default function SignForm({ handleSubmit, children }) {
  return <S.SignForm onSubmit={handleSubmit}>{children}</S.SignForm>;
}
