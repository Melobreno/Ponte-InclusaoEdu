import styled from "styled-components";

export const Section = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .titulo {
    font-family: "Montserrat", sans-serif;
    font-size: 1.18rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  @media (max-width: 425px) {
    display: flex;
    justify-content: start;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .container {
    display: flex;
    gap: 2rem;
  }

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
      width: 16.85rem;
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

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0.75);

    .texto {
      max-width: fit-content;
    }

    .container {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    max-width: 425px;
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      transform: scale(0.5);
      height: 55vh;
      gap: 2rem;
    }
  }
`;
