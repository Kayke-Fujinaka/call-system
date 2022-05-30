import React from "react";

import * as S from "./styles";

export default function SignButton({ children }) {
  return <S.SignButton type="submit">{children}</S.SignButton>;
}
