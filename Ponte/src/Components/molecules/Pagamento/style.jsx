import styled from "styled-components";

export const ContainerSec = styled.section`
  display: flex;
  justify-content: center;
  padding: 1.3rem 20%;

  h1 {
    font-size: 2rem;
    margin-top: 0;
  }

  .sectionForma {
    font-family: "Montserrat";
    background-color: #ffffff;
    width: 100%;
    height: 650px;
    max-width: fit-content;
  }

  .containerForma {
    display: flex;
    gap: 40px;
    max-width: fit-content;
    justify-items: center;
  }

  .contentFormaPagamento {
    background-color: #ffffff;
    border: 1px solid black;
    width: 440px;
    height: 540px;
    border-radius: 10px;
  }

  .contentResumo {
    border: 1px solid black;
    width: 450px;
    height: 360px;
    padding: 10px;
    border-radius: 10px;
    font-size: 14px;
  }

  .contentFormaPagamento img {
    width: 15px;
  }

  .tituloRes {
    margin-top: 5px;
  }

  .contentFormaPagamento a {
    display: flex;
    color: #000000;
    font-size: 14px;
  }

  .formasDePagamento {
    margin-left: 10px;
  }

  .contentResumo p {
    margin-top: 0;
  }
  .contentItens {
    font-weight: 600;
    margin-left: 40px;
    display: flex;
    justify-content: space-between;
  }

  .contentTotal {
    display: flex;
    justify-content: space-between;
  }
  .containerBtn {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .containerBtn button {
    width: 200px;
    height: 40px;
  }
`;
