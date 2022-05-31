import styled from "styled-components";
import theme from "../../Styles/theme";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;

  background: rgba(0, 0, 0, 0.5);

  h3 {
    padding-block: 0 0.5em;
  }

  p {
    font-style: italic;
    word-break: break-all;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: fixed;
  top: 15%;
  left: 0;
  right: 0;

  max-width: 60rem;
  margin: 0 auto;
  padding: 4em 2em;

  background-color: ${theme.contBack};
  border-radius: 0.5rem;

  .close {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.4rem 1rem;

    position: absolute;
    top: 1.5rem;
    left: 1.5rem;

    color: ${theme.white};
    background-color: ${theme.red};
    border: 0;

    svg {
      margin-right: 0.5rem;
    }
  }

  h2 {
    margin-bottom: 0.5em;
    font-size: 2em;
  }

  .row {
    margin-bottom: 0.5em;
  }

  span {
    font-size: 1.2em;
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.black};

    i {
      margin-right: 1em;
      padding: 0.2rem 0.5rem;
      font-weight: ${theme.fonts.weight.medium};
    }
  }
`;
