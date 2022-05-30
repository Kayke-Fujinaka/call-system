import styled from "styled-components";
import theme from "../../Styles/theme";

export const InputSign = styled.input`
  height: 4.5rem;
  padding-inline: 1.5rem;

  font-size: 1.4rem;
  color: ${theme.white};

  border: none;
  border-radius: 0.6rem;
  background-color: ${theme.inputBack};
  &::placeholder {
    color: ${theme.white};
  }
`;
