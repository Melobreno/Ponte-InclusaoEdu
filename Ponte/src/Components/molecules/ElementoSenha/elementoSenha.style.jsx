import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const texto = styled.div`
  text-align: start;
  width: 65%;
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
