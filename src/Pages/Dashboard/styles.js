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
`;

export const Table = styled.table`
  width: 100%;

  margin: 0;
  padding: 0;

  border: 0.1rem solid #ccc;
  border-collapse: collapse;

  table-layout: fixed;

  caption {
    margin-block: 0.5em 0.75em;
    font-size: 1.5em;
    @media (max-width: 700px) {
      font-size: 1.3rem;
    }
  }

  thead {
    @media (max-width: 700px) {
      position: absolute;

      height: 0.1rem;
      width: 0.1rem;

      margin: -0.1rem;
      padding: 0;

      border: none;
      overflow: hidden;
      clip: rect(0 0 0 0);
    }
  }

  tr {
    padding: 0.35em;
    border: 0.1rem solid #ddd;
    background-color: #f8f8f8;
    @media (max-width: 700px) {
      display: block;
      margin-bottom: 0.65em;
      border-bottom: 0.3rem solid #ddd;
    }
  }

  th,
  td {
    text-align: center;
    padding: 0.62em;
  }

  td {
    .action {
      display: inline-block;
      align-items: center;

      margin-right: 0.2rem;
      padding: 0.5rem;

      border: none;
      border-radius: 0.4rem;

      svg {
        vertical-align: middle;
      }
    }

    .badge {
      padding: 0.3rem;
      color: #fff;
      border-radius: 0.3rem;
    }

    &::before {
      @media (max-width: 700px) {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    &:last-child {
      border-bottom: 0;
    }
    @media (max-width: 700px) {
      display: block;
      text-align: right;

      font-size: 0.8em;

      border-bottom: 0.1rem solid #ddd;
    }
  }

  th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    border: none;
  }
`;

export const BtnMore = styled.button`
  height: 3.5rem;
  margin-block: 1.5em;
  padding: 0.5em 1em;

  font-size: 1.1em;
  color: #fff;

  background-color: #181c2e;
  border: none;
  border-radius: 0.5rem;
`;
