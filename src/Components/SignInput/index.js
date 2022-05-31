import React from "react";

import * as S from "./styles";

export default function SignInput({
  type,
  name,
  placeholder,
  autoComplete,
  value,
  handleOnChange,
}) {
  return (
    <S.SignInput
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={handleOnChange}
    />
  );
}
