import styled from "styled-components";
import background from "../../assets/bg.png";

export const Section = styled.section`
  background-image: url(${background});
  background-color: #f6cf00;
  height: 80vh;
  display: flex;
  justify-content: center;

  @media (max-width: 1040px) {
    background-image: none;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.18rem;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1040px) {
    .imagemMaos img {
      display: none;
    }
  }

  section {
    margin: 0 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
  .texto {
    width: 32rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.075rem;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  h1 {
    width: 30rem;
    max-width: 20rem;
    font-family: "Montserrat", sans-serif;
    display: block;
    margin-bottom: 0;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  p {
    margin: 1.5rem 0;
  }

  .imagemMaos {
    display: flex;
    align-items: end;
  }
  @media (max-width: 425px) {
    transform: scale(0.8);
    align-content: center;
    max-width: 425px;
    section {
      gap: 20px;
      margin: 0 0;
    }
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 375px) {
    max-width: 370px;
    .sobre_title {
      margin-bottom: 10%;
    }

    .texto {
      max-width: fit-content;
    }
  }
`;
