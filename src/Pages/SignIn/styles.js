import styled from "styled-components";
import theme from "../../Styles/theme";

export const H1 = styled.h1`
  margin-bottom: 5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  input,
  button {
    height: 4.5rem;
    border: none;
    border-radius: 0.6rem;
  }
  input {
    padding-inline: 1.5rem;
    font-size: 1.4rem;
    color: ${theme.white};
    background-color: ${theme.inputBack};
  }
  input::placeholder {
    color: ${theme.white};
  }
`;
