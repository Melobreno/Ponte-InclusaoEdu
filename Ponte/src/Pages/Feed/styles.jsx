import styled from "styled-components";
import background from "../../Assets/vetorPreto.png";
import breakpoint from "../../breakpoints.js";

export const Pagina = styled.div`
  @media (${breakpoint.md}) {
  }
`;

export const Section = styled.div`
  display: flex;

  justify-content: space-around;
  justify-content: center;
  /* @media (${breakpoint.md}) {
    display: flex;
    margin: auto;
  } */

  .linhaL {
    margin: 0 6rem;
    width: 0rem;
    height: 48rem;
    @media (${breakpoint.bg}) {
      margin: 0 2.5rem;
    }
  }

  .pesquisa {
    @media (${breakpoint.md}) {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }
`;

export const Texto = styled.div``;

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
    margin: 0.63rem 1.5rem;
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
    justify-content: space-around;
  }
  .conteudo p {
    width: 45.0625rem;
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
    width: 2.70213rem;
    height: 2.62469rem;
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
    width: 1.8125rem;
    height: 2.1875rem;
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

    justify-content: space-between;
    padding: 0.88rem;
  }
  .img {
    width: 2.70213rem;
    height: 2.62469rem;
  }
  .comentario {
    display: flex;
    align-items: center;
  }
  .data {
    font-size: 0.75rem;
  }
  .balao {
    padding-left: 1rem;
    width: 1.8125rem;
    height: 2.1875rem;
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
`;

export const Atores = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  height: 46rem;
  width: 450px;

  @media (${breakpoint.md}) {
    width: 250px;
  }
  img {
    padding: 0.68rem;
    display: flex;
    width: 2.625rem;
    height: 2.62469rem;
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
  .vetorPreto {
    width: 28.25rem;
    height: 12.375rem;
  }
`;
export const Imagem = styled.div`
  background-image: url(${background});
  background-size: 28rem 13rem;
  position: relative;
  background-repeat: no-repeat;
  bottom: "0";
  right: "0";
  width: 40rem;
  height: 13rem;
  margin: 20rem 0 1rem 0;

  @media (${breakpoint.sm}) {
    background-image: none;
  }
  @media (${breakpoint.bg}) {
    background-image: none;
  }
`;
