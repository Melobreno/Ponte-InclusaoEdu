import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "Montserrat", sans-serif;
`;
export const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-left: 50px;

  .digite {
    padding: 1rem;
    width: 53vw;
    height: 3rem;
    border: none;
    border-radius: 10px;
    resize: none;
    outline: none;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif, Helvetica;
    font-weight: 500;
  }
  h3 {
    margin: 0;
  }
  .quadro {
    display: flex;
    align-items: center;
    width: 53vw;
    height: 7.8rem;
    border-radius: 10px;
    border: solid 1px #848484;
    padding: 2rem;
    gap: 2rem;
  }
  .digite.ampliado {
    width: 53vw;
    height: 20px;
    padding: 60px;
    border-radius: 0;
    font-size: 0, 81rem;
    background-color: aliceblue;
    border-bottom: solid 2px #25a6ce;
  }

  .icons {
    display: flex;
    margin-left: 18rem;
    gap: 2rem;
  }
  .avatar {
    width: 2.6rem;
    height: 2.6rem;
  }
  .atividade {
  }
  h4 {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
  }
  p {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
  }
  .bnt {
    margin: 20px;
  }
  .inputEstilizando {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 3px;
  }
  .botoes {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
  }

  .butaoSecudario {
    padding: 6px;
    border: none;
    border: solid 2px #25a6ce;
    background-color: #fff;
    border-radius: 15px;
    width: 90px;
    font-family: "Montserrat", sans-serif, Helvetica;
  }
`;
export const menssagem = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: none;
    background-color: aliceblue;
    border-radius: 3px;
  }
  li {
    padding: 30px;
    border: none;
  }
  p {
    font-size: 13px;
  }
  .butoesCaixas {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
  .butoesCaixas button {
    border: none;
    border: solid 1px #25a6ce;
    border-radius: 15px;
    padding: 8px;
    width: 90px;
    background-color: #ffff;
  }
`;
