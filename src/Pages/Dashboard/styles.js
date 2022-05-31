import styled from "styled-components";
import theme from "../../Styles/theme";

export const Table = styled.table`
  width: 100%;

  margin: 0;
  padding: 0;

  border-collapse: collapse;

  caption {
    margin-block: 0.5em 0.75em;
    font-size: 1.5em;
    @media (max-width: 750px) {
      font-size: 1.3rem;
    }
  }

  thead {
    @media (max-width: 750px) {
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
    border: 0.1rem solid ${theme.border};
    background-color: ${theme.contBack};
    @media (max-width: 750px) {
      display: block;
      margin-bottom: 0.65em;
      border-bottom: 0.3rem solid ${theme.border};
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
        color: ${theme.white};
        font-size: 1.7rem;
      }
    }

    .badge {
      padding: 0.3rem; 
      width : 8rem;
      color: ${theme.white};
      border-radius: 0.3rem;
    }

    &::before {
      @media (max-width: 750px) {
        content: attr(data-label);
        float: left;
        font-weight: ${theme.fonts.weight.bolder};
        text-transform: uppercase;
      }
    }

    &:last-child {
      border-bottom: 0;
    }
    @media (max-width: 750px) {
      display: block;
      text-align: right;

      font-size: 0.8em;

      border-bottom: 0.1rem solid ${theme.border};
    }
  }

  th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (max-width: 750px) {
    border: none;
  }
`;

export const BtnMore = styled.button`
  height: 3.5rem;
  margin-block: 1.5em;
  padding: 0.5em 1em;

  font-size: 1.1em;
  color: ${theme.white};

  background-color: ${theme.buttonDarkBlue};
  border: none;
  border-radius: 0.5rem;
`;
