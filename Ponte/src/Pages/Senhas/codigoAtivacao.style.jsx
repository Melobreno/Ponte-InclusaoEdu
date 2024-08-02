import styled from "styled-components";

export const Body = styled.div`
  background-color: #f6cf00;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Circulo = styled.span`
  border-radius: 800px 0px 0px 800px;
  position: absolute;
  background-color: #fff;
  display: inline-block;
  height: 45rem;
  width: 53rem;
  top: 20px;
  right: 0;
`;
export const Container = styled.div`
  background-color: #25a6ce;
  display: flex;
  justify-content: space-around;
  gap: 50px;
  width: 50rem;
  height: 30rem;
  border-radius: 19px;
  z-index: 0;
  margin: 0 0 0 40px;
  img {
    margin: 0 0 15px 20px;
  }
`;

export const text = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: start;
  flex-direction: column;
  margin-right: 25px;

  h1 {
    color: #fff;
  }

  p {
    color: #fff;
  }
  input {
    border: none;
    width: 90%;
    padding: 10px;
    border-radius: 6px;
    outline: none;
  }

  button {
    padding: 10px 30px 12px;
    border: none;
    margin: 20px;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const ImgElemento = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  left: 0;
  bottom: 0;
`;
