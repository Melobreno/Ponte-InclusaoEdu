import styled from "styled-components";

export const Container = styled.section`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 450px;
  gap: 50px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    max-width: 380px;
  }

  h1 {
    text-align: center;
    margin: 0;
    font-size: 2rem;
  }

  form label {
    margin-bottom: 4px;
  }

  form input {
    margin-bottom: 10px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
  }

  .btnContainer {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .btnContainer button {
    font-size: 1.2rem;
    width: 180px;
    height: 45px;
  }

  .inputTipo {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0;
  }

  .inputTipo span {
    width: 160px;
  }

  .labeltitulo {
    margin-bottom: 10px;
  }

  .inputTipo #tipo_conta {
    margin: 0;
  }

  @media (min-width: 1440px) {
    width: 500px;
    height: 450px;
    gap: 50px;
  }

  @media (max-width: 1439px) and (min-width: 1024px) {
    width: 80%;
    height: auto;
    gap: 40px;
  }

  @media (max-width: 1023px) {
    width: 90%;
    height: auto;
    gap: 30px;

    form {
      width: 100%;
      max-width: none;
    }

    .btnContainer button {
      font-size: 1rem;
      width: 150px;
      height: 40px;
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    height: auto;
    gap: 20px;
    padding: 0 10px;

    form {
      width: 100%;
    }

    h1 {
      font-size: 1.5rem;
    }

    form input {
      height: 35px;
    }

    .btnContainer button {
      font-size: 0.9rem;
      width: 140px;
      height: 35px;
    }
  }
`;
