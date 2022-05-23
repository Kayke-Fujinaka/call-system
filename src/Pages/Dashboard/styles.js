import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 1em;
  padding: 0.8em;

  background-color: #f8f8f8;
  border-radius: 0.5rem;
  span {
    margin-block: 2em;

    font-size: 1.2em;
    font-weight: 600;
  }
  .new {
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;

    margin-bottom: 1.5em;
    padding: 0.5em;

    font-size: 1.2em;
    font-weight: 500;
    color: #ffffff;

    border: none;
    border-radius: 0.6rem;
    background-color: #83bf02;

    transition: ease-in 0.1s;
  }
  .new svg {
    margin-right: 0.5rem;
  }
  .new:hover {
    filter: brightness(1.05);
  }
`;
