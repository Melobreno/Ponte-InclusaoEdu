import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: flex-start;
  gap: 10%;

  @media (max-width: 425px) {
    gap: 0;
  }
`;

export const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;

  .tituloh2 {
    text-align: start;
    margin-left: 50px;
  }
  @media (max-width: 1024px) {
    .tituloh2 {
      margin-left: 0;
    }
  }

  @media (max-width: 425px) {
    width: 85vw;

    .tituloh2 {
      margin-left: 10px;
      width: fit-content;
      h2 {
        font-size: 18px;
      }
    }
  }
`;
export const Arquivos = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60vw;
  width: 100vw;
  margin-left: 55px;
  gap: 30px;

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
    margin: 0;

    .containerFunc {
      width: 590px;
    }
  }
  @media (max-width: 425px) {
    margin-left: 10px;
    gap: 15px;

    .containerFunc {
      width: 280px;
      margin-left: 0;
      display: flex;
      height: auto;
      flex-direction: row;
      align-items: center;
    }

    .containerFunc img {
      width: 24px;
    }

    .containerFunc p {
      font-size: 16px;
    }
  }
`;

export const Arquivos1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 820px;
  gap: 20px;

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
    margin-left: 6%;
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
    justify-content: start;
    margin: 0;
    .containerArquivos {
      margin-left: 0;
      width: 600px;
    }
  }
  @media (max-width: 425px) {
    gap: 15px;
    justify-content: start;
    width: fit-content;

    .containerArquivos {
      width: 270px;
      height: auto;
      margin-left: 10px;
      flex-direction: column;
      padding: 0 10px;
    }

    .containerArquivos p {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;
    }

    .containerArquivos p {
      overflow: hidden;
    }
  }
`;
