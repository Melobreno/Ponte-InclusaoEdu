import styled from "styled-components";

export const Body = styled.div`
  background-color: #f6cf00;
 
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Circulo = styled.span`
  border-radius: 50rem 0 0 50rem;
  position: absolute;
  background-color: aliceblue;
  display: inline-block;
  height: 45rem;
  width: 53rem;
  top: 1.25;
  right: 0;
`;
export const containerSenha = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 0;
  justify-content: space-around;
  width: 50rem;
  height: 25rem;
  background-color: #25a6ce;
  border-radius: 1.18rem;
  padding-left: 1.25rem;
  gap: 120px;

  img {
    width: 18.75rem;
    margin-top: 0;
  }
  p {
    color: aliceblue;
    font-family: "Montserrat", sans-serif;
  }


  h2 {
    color: aliceblue;
    font-family: "Montserrat", sans-serif;
  }

  input {
    border-radius: 0.31rem;
    padding: 0.62rem;
    border: none;
    width: 320px;
    align-self: flex-start;
  }
`;
export const textBut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .textEmail {
    margin: 0;
    font-size: 0.75rem;
    align-self: flex-start;
  }
  button {
    padding: 10px 30px 12px;
    width: 100px;
    border: none;
    font-family: "Montserrat", sans-serif;
    color: black;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
  }
`;


