import React from "react";

import * as S from "./styles";

export default function InputSign({
  type,
  name,
  placeholder,
  autoComplete,
  value,
  handleOnChange,
}) {
  return <S.InputSign 
    type={type}
    name={name}
    placeholder={placeholder}
    autoComplete={autoComplete}
    value={value}
    onChange={handleOnChange}
  />;
}
