import styled from "styled-components";

export const Pagina = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 15px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 5%;

  .linhaL {
    margin: 40px;
    width: 0rem;
    height: 48rem;
  }
  @media (max-width: 1024px) {
    .linhaL {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    gap: 20px;
  }

  .pesquisa {
    @media (max-width: 1440px) {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }

  @media (max-width: 425px) {
    display: flex;
    justify-content: flex-start;
    margin: 0;
  }
`;

export const Texto = styled.div`
  background-color: aliceblue;
  height: 0;

  @media (max-width: 425px) {
    width: 350px;
    margin-left: -50px;
  }
`;
export const Escreva = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 13.5rem;
  background-color: aliceblue;
  border-radius: 0.37rem;
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.25);

  .novaMsg {
    display: flex;
    padding: 0.88rem;
  }
  .img {
    width: 2.7rem;
    height: 2.6rem;
  }
  textarea {
    width: 40rem;
    height: 7rem;
    margin-top: 0.4rem;
    margin-left: 0.71rem;
    border: none;
    resize: none;
    background-color: aliceblue;
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
    margin: 0.63rem 1.5rem;
    span {
      display: flex;
      align-items: center;
      color: red;
      margin-right: 1rem;
    }
  }

  @media (max-width: 425px) {
    width: 26rem;
    height: 11rem;
    transform: scale(0.7);
    textarea {
      width: 80vw;
      font-size: 1rem;
    }
    hr {
      display: none;
    }
    .botao {
      justify-content: end;
      margin-top: 10%;
    }
  }
  @media (max-width: 1024px) {
    textarea {
      height: 40px;
      border-bottom: 1px solid #4e4b4b;
    }

    hr {
      display: none;
    }
  }
`;

export const Mensagem = styled.div`
  display: flex;
  width: 50rem;
  height: 13.5rem;
  margin-top: 3.18rem;
  background-color: aliceblue;
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
    justify-content: space-around;
  }
  .conteudo p {
    width: 45.06rem;
    height: 6.5rem;
    margin: 0;
  }

  h1 {
    font-size: 1rem;
    font-weight: 700;
  }
  .comentario p {
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
  }
  .enviado {
    display: flex;
    justify-content: space-between;
    padding: 0.88rem;
  }
  .img {
    width: 2.7rem;
    height: 2.62rem;
  }
  .comentario {
    display: flex;
    align-items: center;
  }
  .data {
    font-size: 0.75rem;
  }
  .balao {
    padding-left: 0.5rem;
    width: 1.81rem;
    height: 2.18rem;
  }
  button.lixeira {
    padding: 0;
  }
  .lixeira {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 1.1rem;
    height: 1.2rem;
    margin-left: 1.2rem;
    border: none;
    resize: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .lixeira:hover {
    box-shadow: 0 0.33rem 0.7rem rgba(0, 0, 0, 0.37);
    transform: translateY(-1px);
  }

  @media (max-width: 425px) {
    margin-top: 0;
    margin-bottom: 10px;
    width: 300px;
    padding: 0;
    transform: scale(0.9);
    margin-left: 50px;

    .texto {
      width: fit-content;
    }

    h1 {
      width: fit-content;
    }

    .conteudo p {
      width: fit-content;
    }

    .conteudo {
      width: fit-content;
    }

    .enviado {
      height: 100px;
    }
  }
`;

export const Atores = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-right: 5rem;
  height: 46rem;
  width: 350px;

  @media (max-width: 425px) {
    display: none;
  }

  @media (max-width: 1440px) {
    width: 250px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
  img {
    padding: 0.68rem;
    display: flex;
    width: 2.62rem;
    height: 2.62rem;
  }

  .atores {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .texto {
    padding: 0.68rem;
    width: 15rem;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    a {
      text-decoration: none;
      color: black;
    }
  }

  h2 {
    margin: 0;
    font-family: "Montserrat", sans-serif, Helvetica;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
  }
  p {
    margin: 0;
    font-family: "Montserrat", sans-serif, Helvetica;
    font-size: 0.9rem;
    font-weight: 400;
  }

  .vetor {
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-top: 20rem;
  }
`;
