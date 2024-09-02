import styled from "styled-components";

export const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-family: "Montserrat", sans-serif;

  .tituloh2 {
    text-align: start;
    margin-left: 50px;
  }
`;
export const Arquivos = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60vw;
  margin-left: 55px;
  gap: 30px;
  justify-content: space-evenly;

  div {
    width: 250px;
    height: 220px;
    border-radius: 10px;
    border: solid 1px #000000;
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

  .containerFunc img {
    width: 30px;
    background-color: #f4c500;
    padding: 5px;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    transform: scale(0.8);
    margin: 0;

    .containerFunc {
      width: 480px;
    }
  }
  @media (max-width: 425px) {
    margin-left: 30px;
    gap: 15px;

    .containerFunc {
      display: flex;
      width: 400px;
      height: 80px;
      height: auto;
      flex-direction: row;
      align-items: center;
    }

    .containerFunc img {
      width: 24px;
    }
  }
`;

export const Arquivos1 = styled.div`
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 50px;

  .timeDelete {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .msgSemArquivo {
    width: 70vw;
  }

  .containerArquivos {
    width: 812px;
    height: 80px;
    border-radius: 10px;
    border: solid 1px #000000;
    display: flex;
    align-items: center;
  }
  .containerArquivos p {
    padding: 0 10px;
    width: 100%;
    text-align: start;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1024px) {
    transform: scale(0.8);
    justify-content: start;
    margin: 0;
    .containerArquivos {
      margin-left: 0;
    }
  }
  @media (max-width: 425px) {
    margin-left: 20px;
    gap: 15px;

    .containerArquivos {
      width: 90vw;
      height: auto;
      margin-left: 0;
      flex-direction: column;
      padding: 10px;
    }

    .containerArquivos p {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;
    }

    .msgSemArquivo {
      width: 90vw;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  @media (max-width: 425px) {
    padding: 10px;
  }
`;
