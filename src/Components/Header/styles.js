import styled from "styled-components";
import cover from "../../Assets/cover.png";

export const Sidebar = styled.div`
  position: fixed;
  height: 100%;
  width: 20rem;

  background-color: #181c2e;

  overflow: auto;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 1.6rem;

    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;

    transition: ease-in-out 0.4s;

    svg {
      margin-right: 0.5em;
      @media (max-width: 700px) {
        display: none;
      }
    }
    @media (max-width: 700px) {
      float: left;
    }
  }
  a:hover {
    background-color: #121212;
    color: #fff;
  }
  @media (max-width: 700px) {
    position: relative;
    width: 100%;
    height: auto;
  }
`;

export const HeaderImgWrapper = styled.div`
  height: 15rem;
  padding-top: 3rem;

  background: #181c2e url(${cover}) center no-repeat;
  background-size: cover;
  
  img {
    display: block;
    width: 9rem;
    height: 9rem;

    margin: auto;
    
    border-radius: 50%;
    object-fit: cover;
    filter: drop-shadow(0.2rem 0.3rem 0.6rem #121212);
    -webkit-filter: drop-shadow(0.2rem 0.3rem 0.6rem #121212);
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
