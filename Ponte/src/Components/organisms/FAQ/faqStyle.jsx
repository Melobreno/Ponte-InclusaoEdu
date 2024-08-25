import styled from "styled-components";

export const Sect = styled.section`
  font-family: "Monserrat", sans-serif;
  background-color: #f6cf00;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  height: 80vh;

  .divEsq img {
    width: 500px;
  }

  @media (max-width: 1170px) {
    .divEsq img {
      display: none;
    }
  }
`;
