import styled from "styled-components";

export const Section = styled.section`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  justify-content: center;
  gap: 10%;
  width: 100vw;
  align-content: center;
  align-items: center;
  gap: 0.8rem;
  height: 700px;

  .button {
    display: flex;
    align-items: center;
    justify-content: start;
    padding-bottom: 1.4rem;
  }

  .button button {
    width: 180px;
    height: 40px;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

export const ContainerEsq = styled.div`
  width: 55rem;
  max-width: 31.25rem;
`;

export const ContainerDir = styled.div`
  img {
    width: 30rem;
  }

  @media (max-width: 1024px) {
    img {
      display: none;
    }
  }
`;
