import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  gap: 100px;

  .sidebar {
    display: flex;
    z-index: 1000;
  }

  .secEsquerda {
    display: flex;
  }

  .menuLateral {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    width: 6.37rem;
    height: 30rem;
  }
  .menuLateral img {
    padding: 10px;
    border-radius: 10px;
  }
  .msg {
    background-color: #25a6ce;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  .pesquisar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .search {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 19rem;
    height: 2.4rem;
    border-radius: 18px;
    border: 2px solid #25a6ce;
  }
  .lupa {
    width: 2rem;
  }
  .button {
    all: unset;
    cursor: pointer;
  }

  input {
    width: 15rem;
    border: none;
    resize: none;
    outline: none;
  }
  input::placeholder {
    font-family: "Montserrat", sans-serif, Helvetica;
  }
  .conversa {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0.95rem 0;
  }

  h1 {
    font-family: "Montserrat", sans-serif, Helvetica;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 600;
  }
  p {
    font-family: "Montserrat", sans-serif, Helvetica;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    margin: 0;
    justify-content: end;
  }
  .avatar {
    width: 3.87531rem;
    height: 3.875rem;
  }

  .titleCv {
    display: flex;
    justify-content: space-between;
  }
  .bot1 {
    display: flex;
    width: 18.6875rem;
    height: 6.0625rem;
    padding: 10px 0.95rem;
    background-color: #ececec;
    border-left: 0.3rem solid #25a6ce;
  }
  .bot {
    display: flex;
    width: 18.6875rem;
    height: 6.0625rem;
    padding: 10px;
  }
  .texto {
    display: flex;
    flex-direction: column;
    width: 21rem;
    padding-left: 1rem;
  }

  .conversasIf {
    display: flex;
    gap: 20px;
    margin-left: 140px;
  }

  @media (max-width: 1440px) {
    display: flex;
    gap: 0;
    .conversasIf {
      margin-left: 5rem;
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    gap: 0;
    margin: 0;

    .secEsquerda {
      display: none;
      justify-content: flex-start;

      width: 15rem;
    }
    .conversasIf {
      margin-left: 2rem;
      width: 90%;
    }
    .bot1 {
      display: flex;
      width: fit-content;
    }
    .bot {
      display: flex;
      width: fit-content;
    }
    .search {
      display: none;
    }
    .pesquisar {
      display: flex;

      width: 80%;
    }
    .conversa {
      display: flex;
      justify-content: flex-start;
      width: 15rem;
    }
    span {
      display: none;
    }
    .texto {
      display: flex;
      width: fit-content;
    }
  }

  @media (max-width: 425px) {
    .secEsquerda {
      display: none;
    }
    .conversasIf {
      display: flex;
      justify-content: flex-start;
      margin: 0;
    }

    .pesquisar {
      background-color: black;
    }
  }
`;
export const Direita = styled.div`
  iframe {
    width: 40rem;
    height: 42rem;
    border: 1px solid black;
  }

  @media (max-width: 1024px) {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 425px) {
    display: flex;
    justify-content: start;
    width: fit-content;

    iframe {
      width: 80vw;
    }
  }
`;
