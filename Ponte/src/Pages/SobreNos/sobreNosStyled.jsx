import styled from "styled-components";
import background from "../../Assets/bg.png";

export const Section = styled.section`
  background-image: url(${background});
  background-color: #f6cf00;
  height: 775.61px;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.18rem;
  justify-content: center;
  gap: 20px;
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
    margin: 1%.5 0;
  }

  .imagemMaos {
    margin: -5px;
    margin-top: 6.9rem;
    display: flex;
    justify-content: end;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
