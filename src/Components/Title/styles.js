import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-block: 1em;
  padding: 0.8em;

  background-color: #f8f8f8;
  border-radius: 0.5rem;
  
  span {
    margin-left: 1em;
    font-size: 1.5em;
    @media (max-width: 700px) {
      font-size: 1.25em;
    }
  }
`;
