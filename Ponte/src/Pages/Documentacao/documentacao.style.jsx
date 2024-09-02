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
  flex-direction: row;
  max-width: 70vw;
  gap: 30px;
  justify-content: space-evenly;

  div {
    width: 250px;
    height: 220px;
    border-radius: 10px;
    border: solid 2px #000000;
  }

  .containerFunc {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .containerFunc img {
    width: 30px;
    background-color: #f4c500;
    padding: 5px;
    border-radius: 10px;
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
    width: 54vw;
    height: 80px;
    margin-left: 50px;
    border-radius: 10px;
    border: solid 2px #000000;
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
`;
export const Container = styled.div`
  display: flex;
  text-align: center;
`;
