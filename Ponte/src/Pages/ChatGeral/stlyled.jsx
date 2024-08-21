import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  padding: 1.5rem 20%;
  gap: 20px;
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
    border-radius: 0.625rem;
    border: 0.13rem solid #a6a6a6;
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
`;
export const Direita = styled.div`
  iframe {
    width: 37.5rem;
    height: 40rem;
  }
`;
