import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, 0.5);
    z-index: 99;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: fixed;
  top: 35%;
  left: 0;
  right: 0;

  max-width: 60rem;
  margin: 0 auto;

  padding: 5em 2em;

  background-color: #f8f8f8;
  border-radius: 0.5rem;
`;
