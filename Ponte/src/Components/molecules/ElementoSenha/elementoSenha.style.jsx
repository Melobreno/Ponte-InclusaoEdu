import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  height: 50rem;
`;

export const texto = styled.div`
  text-align: start;
  width: 65%;
  font-family: "montsserat";
  font-size: x-large;
  width: 23rem;
`;
export const inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    width: 20rem;
    height: 2rem;
    border-radius: 0.6rem;
    border: 0.125rem solid #25a6ce;
    outline: none;
  }
`;
