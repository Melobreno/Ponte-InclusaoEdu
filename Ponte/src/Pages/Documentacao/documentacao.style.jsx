import styled from "styled-components";

export const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Montserrat", sans-serif;
`;
export const Arquivos = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 50px;
  div {
    width: 350px;
    height: 80px;
    border-radius: 10px;
    border: solid 2px #848484;
  }
`;

export const Arquivos1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 50px;
  div {
    width: 100%;
    height: 80px;
    border-radius: 10px;
    border: solid 2px #848484;
    p {
    }
  }
`;
export const Container = styled.div`
  display: flex;
  text-align: center;
`;
export const Text = styled.div`
  h3 {
    display: flex;
    align-items: flex-start;
    margin-left: 50px;
  }
`;
