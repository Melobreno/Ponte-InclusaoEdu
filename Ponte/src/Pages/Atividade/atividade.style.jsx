import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: "Montserrat", sans-serif;
  gap: 2%;

  @media (max-width: 1024px) {
    margin-left: 0;
    max-width: 730px;
  }
  @media (max-width: 425px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 0 0;
    right: 0;
  }
`;
export const Bloco = styled.div`
  display: flex;
  margin-left: 5%;

  @media (max-width: 425px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
  }
  @media (max-width: 1024px) {
    form {
      max-width: 730px;
    }
  }

  h1 {
    font-family: "Montserrat", sans-serif, Helvetica;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 36.4rem;
    height: 4.4rem;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0;
  }
  .digite {
    width: 44vw;
    padding: 1rem;
    height: 3rem;
    border: none;
    border-radius: 10px;
    resize: none;
    outline: none;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif, Helvetica;
    font-weight: 500;
    display: flex;
    @media (max-width: 425px) {
      width: 100%;
    }
    @media (max-width: 1024px) {
      width: min-content;
    }
  }

  form {
    width: 1100px;
    @media (max-width: 425px) {
      width: 20rem;
    }
    @media (max-width: 1024px) {
      width: fit-content;
    }
  }

  .quadro {
    display: flex;
    align-items: center;
    width: 55vw;
    height: 7.8rem;
    border-radius: 10px;
    border: solid 1px #848484;
    gap: 2rem;
    @media (max-width: 425px) {
      width: 100%;
      padding: 1rem;
    }
    @media (max-width: 1024px) {
      width: 100%;
      padding: 1rem;
    }
  }
  input {
    background-color: white;
  }
  .digite.ampliado {
    width: 64rem;
    height: 20px;
    padding: 60px 30px;
    border-radius: 0;
    font-size: 0, 81rem;
    background-color: aliceblue;
    border-bottom: solid 2px #25a6ce;
    @media (max-width: 1024px) {
      width: 70%;
      font-size: 0.5rem;
    }
    @media (max-width: 425px) {
      width: 14rem;
      word-wrap: break-word;
    }
  }
  .avatar {
    width: 2.6rem;
    height: 2.6rem;

    @media (max-width: 1024px) {
      h4 {
        width: auto;
      }
    }
  }

  .bnt {
    margin: 20px;
    @media (max-width: 425px) {
      margin: 10px;
    }
    @media (max-width: 1024px) {
      margin: 10px;
    }
  }
  .inputEstilizando {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 67.4rem;
    background-color: white;
    box-shadow: 1px 1px 1px 1px rgba(111, 111, 111, 0.2);
    padding: 10px;
    border-radius: 3px;
    @media (max-width: 425px) {
      width: 19rem;
      padding: 5px;
    }
    @media (max-width: 1024px) {
      padding: 0;
      height: auto;
      margin-left: 10px;
      padding: 2%;
      width: max-content;
    }
  }
  .botoes {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    @media (max-width: 425px) {
      height: 2rem;

      justify-content: center;
      gap: 10px;
      padding: 4px;
    }
    @media (max-width: 1024px) {
      justify-content: end;
      margin-right: 15px;
      gap: 10px;
    }
  }

  .botaoSecudario {
    padding: 6px;
    border: none;
    border: solid 2px #25a6ce;
    background-color: #fff;
    border-radius: 15px;
    width: 90px;
    cursor: pointer;
    font-family: "Montserrat", sans-serif, Helvetica;
    @media (max-width: 425px) {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      font-size: 10px;
      padding: 5px;
      width: 70px;
    }
    @media (max-width: 1024px) {
    }
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
    margin-left: 1px;
    gap: 20px;
    @media (max-width: 425px) {
      width: 18rem;
      padding: 0;
      height: 30%;
      margin-left: 10px;
      margin-right: 20px;
      font-size: 8px;
    }
    @media (max-width: 1024px) {
      padding: 1%;
      margin-left: 10px;
      width: max-content;
    }
  }
  h2 {
    margin: 20px;
  }
  li {
    margin-left: 5px;
    margin-right: 10px;
    border: none;
    width: 100%;
  }
  p {
    font-size: 13px;
  }
  .botoesCaixas {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
    margin-right: 1rem;
    @media (max-width: 1024px) {
      padding: 0 1%;
    }
  }
  .botoesCaixas button {
    border: none;
    border: solid 1px #25a6ce;
    border-radius: 15px;
    padding: 8px;
    width: 90px;
    cursor: pointer;
    background-color: #ffff;
    @media (max-width: 425px) {
      padding: 4px;
      width: 50px;
      font-size: 8px;
    }
    @media (max-width: 1024px) {
      width: 70px;
    }
  }
  .avatar {
    display: flex;
    gap: 7px;
    width: auto;
  }

  @media (max-width: 1024px) {
    max-width: 730px;
    width: 100%;
  }

  .secResp {
  }
`;
