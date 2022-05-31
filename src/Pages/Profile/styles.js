import styled from "styled-components";
import theme from "../../Styles/theme";

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
    z-index: 2;
    opacity: 0.6;
    transition: all 0.5s;

    &:hover {
      opacity: 1;
      transform: scale(1.2);
    }
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

export const LogoutBtn = styled.button`
  padding: 0.25rem 1.5rem;

  font-size: 1.2em;
  background-color: transparent;
  border: 0.1rem solid #121212;
  border-radius: 0.5rem;

  transition: all ease 0.25s;

  &:hover {
    background-color: #e73936;
    border: 0.1rem solid #e73936;
    color: #fff;
  }
`;
