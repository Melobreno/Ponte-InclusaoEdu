import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  padding: 1.5rem 20%;
  .menuLateral {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    width: 6.375rem;
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
    padding-top: 1rem;
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
    /* justify-content: space-between; */
    background-color: #ececec;
    border-left: 0.3rem solid #25a6ce;
  }
  .bot {
    display: flex;
    width: 18.6875rem;
    height: 6.0625rem;
    padding: 10px;
    /* justify-content: space-between; */
  }
  .texto {
    display: flex;
    flex-direction: column;
    width: 21rem;
    padding-left: 1rem;
  }
`;
export const Direita = styled.div`
  width: 37.5rem;
  height: 40rem;

  .perfil {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.9rem;
    border: 0.13rem solid #938e8e;
    border-bottom: none;
  }
  .online {
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif, Helvetica;
    font-weight: 600;
  }
  h1 {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    margin: 0;
  }

  span {
    color: #1ed40e;
  }

  .tresPontos {
    padding-left: 17rem;
  }

  .mensagem {
    border: 0.13rem solid #938e8e;
    padding: 1rem;
    height: 40rem;
  }

  .enviada {
    display: flex;
    justify-content: end;
    padding: 1rem;
    padding: 1.3rem 1rem 0 10rem;
  }
  .recebida {
    display: flex;
    justify-content: start;
    padding: 1.3rem 10rem 0 1rem;
  }

  .enviada p {
    background-color: #f6cf00;
    border-radius: 0.625rem;
    padding: 0.6rem;
  }

  .recebida p {
    background-color: #25a6ce;
    border-radius: 0.625rem;
    padding: 0.6rem;
  }

  .enviar {
    display: flex;
    align-items: center;
  }

  hr {
    margin-top: 1rem;
  }
  .novaMsg {
    width: 25.625rem;
    height: 2.875rem;
  }

  input::placeholder {
    font-family: "Montserrat", sans-serif, Helvetica;
  }

  .botao {
    display: flex;
    justify-content: center;
  }
`;
