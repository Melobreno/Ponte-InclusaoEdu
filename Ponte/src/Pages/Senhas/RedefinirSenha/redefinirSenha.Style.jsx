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
  border-radius: 50rem 0 0 50rem;
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
  gap: 3.12rem;
  width: 50rem;
  height: 30rem;
  border-radius: 1.18rem;
  z-index: 0;
  margin: 0 0 0 2.5rem;
  img {
    margin: 0 0 1rem 1.25rem;
  }
`;

export const text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 10px;

  h1 {
    color: #fff;
  }

  p {
    color: #fff;
  }
  input {
    border: none;
    width: 90%;
    padding: 0.62rem;
    border-radius: 0.37rem;
    outline: none;

  }

  button {
    padding: 0.62rem 1.8rem 0.75rem;
    border: none;
    margin: 1.25rem;
    border-radius: 0.37rem;
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
export const labelInput =styled.div`
label {
    color: #ffff;
    font-size: 0.75rem;
}

`