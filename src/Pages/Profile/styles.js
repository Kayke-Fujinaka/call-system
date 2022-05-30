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
  }
  .form-profile label {
    margin-bottom: 0.5em;
    font-size: 1.4em;
  }
  .form-profile input,
  textarea,
  select {
    max-width: 60rem;
    margin-bottom: 1em;
    padding: 0.7em;
    border: none;
    border-radius: 0.5rem;
  }
  .form-profile input:disabled {
    cursor: not-allowed;
  }
  .form-profile button {
    max-width: 60rem;
    height: 3.5rem;
    border: 0;
    border-radius: 0.7rem;
    background-color: #181c2e;
    color: #fff;
    font-size: 1.4em;
  }
  .logout-btn {
    padding: 0.25rem 1.5rem;
    font-size: 1.2em;
    background-color: transparent;
    border: 0.1rem solid #121212;
    border-radius: 0.5rem;
    transition: all ease 0.25s;
    &:hover {
      background-color: #E73936;
      border: 0.1rem solid #E73936;
      color: #FFF;
    }
  }
`;

export const AvatarLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 28rem;
  height: 28rem;
  cursor: pointer;
  span {
    position: absolute;
    z-index: 100;
    opacity: 0.6;
    transition: all 0.5s;
  }
  span:hover {
    opacity: 1;
    transform: scale(1.2);
  }
  input {
    display: none;
  }
  img {
    margin-bottom: 1em;
    border-radius: 50%;
    object-fit: cover;
  }
`;
