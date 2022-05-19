import React from 'react';

import * as S from "./styles";

export default function Title({children, name}) {
  return (
      <S.Title>
        {children}
        <span>{name}</span>
      </S.Title>
  );
}