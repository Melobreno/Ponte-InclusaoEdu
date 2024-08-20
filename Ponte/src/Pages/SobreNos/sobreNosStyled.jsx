import styled from "styled-components";

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  flex-direction: column;

  h1 {
    margin-top: 0;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
  }

  p {
    width: 70%;
    border-top: solid 0.06rem white;
    margin-top: 3rem;
  }
`;

export const Section = styled.section`
  width: 100vw;
  background-color: #f6cf00;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
  font-size: 1.18rem;
  align-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px;

  section {
    margin-right: 5rem;
  }

  img {
    width: 43.25rem;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  p {
    width: 30rem;
    max-width: 20rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
    display: block;
    padding: 10px;
    margin-bottom: 0;
  }

  .imagemMaos {
    margin: -5px;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
