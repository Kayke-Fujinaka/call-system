import styled from "styled-components";
import theme from "../../Styles/theme";

export const PrivateButton = styled.button`
  max-width: 60rem;
  height: 3.5rem;

  font-size: 1.4em;
  color: ${theme.white};

  background-color: ${theme.buttonDarkBlue};
  border: 0;
  border-radius: 0.7rem;
`;
