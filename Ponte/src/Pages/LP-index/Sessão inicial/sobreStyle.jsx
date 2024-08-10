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

  padding: 1.3rem 10%;
  align-content: center;
  align-items: center;
  gap: 0.8rem;
  height: 700px;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1.4rem;
  }

  .button button {
    width: 190px;
    height: 45px;
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
`;
