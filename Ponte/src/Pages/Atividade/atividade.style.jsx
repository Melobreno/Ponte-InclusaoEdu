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
    width: 40rem;
    height: 4.5rem;
    border: none;
    resize: none;
    outline: none;
    font-size: 1.3rem;
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
    border: solid 2px #848484;
    padding: 2rem;
    gap: 2rem;
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
`;
