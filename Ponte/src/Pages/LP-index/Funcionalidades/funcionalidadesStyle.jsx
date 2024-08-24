import styled from "styled-components";

export const Section = styled.div`
  height: 775.61px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.4rem;

  .titulo {
    font-family: "Montserrat", sans-serif;

    font-size: 1.18rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 2.75rem;
  margin-bottom: 3rem;
  .bloco {
    width: 20.5rem;
    height: 30.625rem;
    border-radius: 1.1875rem;
    background: #f6cf00;
    display: flex;
    justify-content: center;
  }

  .texto {
    padding: 1rem;
    width: 17rem;
    margin-top: 0;
    h2 {
      font-family: "Montserrat", sans-serif;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      width: 15.375rem;
      margin: 0;
    }
    p {
      width: 16.8125rem;
      font-family: "Montserrat", sans-serif;
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 0 auto;
    }
  }
  .imagem {
    display: flex;
    justify-content: center;

    img {
      width: 11.125rem;
      height: 10.875rem;
    }
  }
`;
