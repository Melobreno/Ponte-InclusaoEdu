import styled from "styled-components";

export const Container = styled.section`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 450px;
  gap: 50px;

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 380px;
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
    margin-top: 40px;
  }

  .btnContainer button {
    font-size: 1.2rem;
    width: 180px;
    height: 45px;
  }
`;
