import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10%;

  @media (max-width: 425px) {
    justify-content: start;
    gap: 0;
  }
`;

export const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Montserrat", sans-serif;
  width: fit-content;

  .tituloh2 {
    text-align: start;
  }
`;
export const Arquivos = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60vw;
  gap: 30px;
  justify-content: center;

  div {
    width: 250px;
    height: 220px;
    border-radius: 10px;
    border: solid 1px #000000;
  }

  .containerFunc > p {
    font-weight: bold;
  }

  .containerFunc a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  .containerFunc {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    gap: 2%;
    width: 800px;
    height: 80px;
  }

  @media (max-width: 1024px) {
    transform: scale(0.8);
    margin: 0;

    .containerFunc {
      width: 480px;
    }
  }
  @media (max-width: 425px) {
    gap: 15px;

    .containerFunc {
      display: flex;
      width: 320px;
      height: 80px;
      height: auto;
      flex-direction: row;
      text-align: start;
    }
  }
`;
