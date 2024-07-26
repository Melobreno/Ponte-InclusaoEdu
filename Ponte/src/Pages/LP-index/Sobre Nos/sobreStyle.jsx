import styled from "styled-components";

export const Section = styled.section`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 1.3rem 20%;
  align-content: center;
  align-items: center;
  gap: 10px;

  .button {
    display: flex;
    padding: 0.1rem 40%;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerEsq = styled.div`
  width: 55rem;
`;

export const ContainerDir = styled.div`
  img {
    width: 30rem;
  }
`;
