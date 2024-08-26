import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  gap: 10%;
  background-color: #ffffff;
  position: sticky;
  margin: 0 auto;
  align-items: center;
  margin-top: 10px;
  img {
    width: 12rem;
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 40%;
    align-items: center;
  }
`;
