import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;

  h3 {
    padding-block: 0 0.5em;
  }
  
  p {
    word-break: break-all;
    font-style: italic;
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

  background-color: #f8f8f8;
  border-radius: 0.5rem;

  .close {
    background-color: #dc3545;
    border: 0;
    color: #ffff;
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 1rem;

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
    font-weight: bold;
    font-size: 1.2em;
    color: #121212;

    i {
      font-weight: 400;
      margin-right: 1em;
      padding: 0.2rem 0.5rem;
    }
  }
`;
