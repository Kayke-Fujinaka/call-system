import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1em;
  padding: 0.8em;

  background-color: #f8f8f8;
  border-radius: 0.5rem;

  .form-profile {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      margin-bottom: 0.5em;
      font-size: 1.4em;
    }

    input,
    textarea,
    select {
      max-width: 60rem;
      margin-bottom: 1em;

      padding: 0.7em;

      border: none;
      border-radius: 0.5rem;
    }

    textarea {
      height: 10rem;
      resize: none;
    }

    input[type="radio"] {
      margin-block: 0.75rem 1.5rem;

      &:not(:first-child) {
        margin-left: 1.5rem;
      }
    }

    input:disabled {
      cursor: not-allowed;
    }

    span {
      padding-left: 0.5em;
      font-size: 1.1em;
    }

    button {
      max-width: 60rem;
      height: 3.5rem;

      font-size: 1.4em;
      color: #fff;

      border: 0;
      border-radius: 0.7rem;
      background-color: #181c2e;
    }
  }
`;
