import React from 'react';

import * as S from "./styles";

export default function PrivateButton({children}) {
  return <S.PrivateButton type="submit">{children}</S.PrivateButton>;
}