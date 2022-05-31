import styled from "styled-components";
import theme from "../../Styles/theme";

export const SignButton = styled.button`
  height: 4.5rem;

  margin-block: 1rem 1.5rem;

  font-size: 1.8rem;
  color: ${theme.white};
  
  border: none;
  border-radius: 0.6rem;
  background-color: ${theme.blue};
  &:hover {
    filter: brightness(0.95);
  }
`;
