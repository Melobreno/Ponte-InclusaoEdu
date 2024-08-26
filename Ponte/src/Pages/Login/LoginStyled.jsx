import styled from "styled-components";

export const Section = styled.div`
  font-family: "Montserrat", Helvetica;
  display: flex;
  max-height: 100vh;
  justify-content: center;
  gap: 200px;
`;

export const Fundo = styled.div`
  background-color: #25a6ce;
  width: 55rem;
  height: 56.75rem;
  border-radius: 0rem 50rem 50rem 0rem;
  margin-top: 2rem;
`;
export const Imagem = styled.div`
  width: 31.1875rem;
  height: 31.1875rem;
  margin: 13rem 5.31rem 13rem 15rem;
`;

export const Container = styled.div`
  display: inline-block;
  width: 27.8125rem;
  height: 44.4375rem;
  margin: 5rem 21rem 12rem 4rem;

  h1 {
    width: 27.8125rem;
    height: 2.9375rem;
    color: #000;
    text-align: center;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  img {
    padding: 2rem;
    margin-top: 2rem;
    width: 23.375rem;
    height: 8.0625rem;
  }
  .loginContainer {
    margin-top: 3.44rem;

    width: 27.8125rem;
    height: 25.25rem;
    flex-direction: column;
    text-align: center;
  }
  p {
    color: #000;
    text-align: left;
    margin: 0.94rem 0 0.3rem 3.31rem;
    font-size: 0.8125rem;
    font-weight: 500;
  }

  .botao {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    margin-top: 3px;
  }

  .botao button {
    width: 123px;
    height: 30px;
    margin-bottom: 15px;
  }

  .botao span {
    font-size: 14px;
    color: #ff0000;
    font-weight: 500;
  }

  .esqueceuSenha {
    display: flex;
    color: #000;
    text-decoration: none;
    justify-content: right;
    margin: 0.3rem 3.31rem 0 0;
    font-size: 0.8125rem;
    transition: transform 0.2s ease-in-out;
  }

  .esqueceuSenha:hover {
    transform: scale(1.02);
  }
  .cadastre {
    font-size: 0.8125rem;
    font-weight: 500;
  }

  .cadastre a {
    font-size: 0.8125rem;
    font-weight: 500;
    transition: transform 0.2s ease-in-out;
    color: #25a6ce;
  }
  .cadastre a:hover {
    transform: scale(1.02);
  }

  input {
    width: 21.0625rem;
    height: 2.4rem;
    border-radius: 0.625rem;
    border: 0.125rem solid #25a6ce;
    background: #fff;
  }
`;
