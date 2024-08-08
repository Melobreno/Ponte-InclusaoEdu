import styled from "styled-components";

export const Section = styled.div`
  margin: 7rem 29rem 2rem 10rem;
  display: flex;
  flex-direction: column;

  width: 56.375rem;
  height: 59.875rem;
`;

export const Escreva = styled.div`
  width: 50rem;
  height: 13.5rem;
  background-color: #ecf4f6;

  border-radius: 0.375rem;
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.25);
  .novaMsg {
    display: flex;
    padding: 0.88rem;
  }
  .img {
    width: 2.70213rem;
    height: 2.62469rem;
  }
  textarea {
    width: 44rem;
    height: 7rem;
    margin-top: 0.4rem;
    margin-left: 0.71rem;
    border: none;
    resize: none;
    background-color: #ecf4f6;
    font-weight: 500;
    outline: none;
    font-size: 1.25rem;
    font-family: "Montserrat", sans-serif, Helvetica;
  }
  textarea::placeholder {
    font-family: "Montserrat", sans-serif, Helvetica;
    color: #4e4b4b;
  }
  hr {
    display: flex;
    justify-content: center;
    width: 48rem;
    height: 1px;
    padding: 0;
  }

  .botao {
    display: flex;
    justify-content: right;
    margin: 0.63rem 1rem;
  }
`;

export const Mensagem = styled.div`
  display: flex;
  width: 50rem;
  height: 13.5rem;
  margin-top: 2.18rem;
  background-color: #ecf4f6;
  border-radius: 0.375rem;
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.25);

  .texto {
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif, Helvetica;
    width: 44rem;
    height: 7rem;
    margin-top: 0.4rem;
    margin-left: 0.71rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 700;
  }
  p {
    text-align: left;
    font-size: 1.25rem;
    font-weight: 400;
  }
  .enviado {
    justify-content: space-between;
    padding: 0.88rem;
  }
  .img {
    width: 2.70213rem;
    height: 2.62469rem;
  }
`;

export const Mensagem2 = styled.div`
  display: flex;
  width: 50rem;
  height: 13.5rem;
  margin-top: 2.18rem;
  background-color: #ecf4f6;
  border-radius: 0.375rem;
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.25);

  .texto {
    font-family: "Montserrat", sans-serif, Helvetica;
    width: 44rem;
    height: 7rem;
    margin-top: 0.4rem;
    margin-left: 0.71rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 700;
  }
  p {
    text-align: left;
    font-size: 1.25rem;
    font-weight: 400;
  }
  .enviado {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.88rem;
  }
  .img {
    width: 2.70213rem;
    height: 2.62469rem;
  }
`;
