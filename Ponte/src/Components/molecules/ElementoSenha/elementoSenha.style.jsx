import styled from "styled-components";

export const Container = styled.div`
  transform: scale(1.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  img {
    width: 300px;
  }
`;

export const texto = styled.div`
  h1 {
    font-size: 2.2rem;
    text-align: center;
    text-transform: capitalize;
  }

  p {
    margin: 0;
    font-size: 12.5px;
    text-align: start;
    width: 290px;
  }
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
