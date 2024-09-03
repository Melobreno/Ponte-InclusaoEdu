import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  position: sticky;
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

  @media (max-width: 425px) {
    display: flex;

    padding: 0;
  }
`;
