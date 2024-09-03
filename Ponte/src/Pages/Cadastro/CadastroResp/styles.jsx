import styled from "styled-components";

export const Container = styled.div`
  .side {
    display: flex;
    gap: 10rem;
  }
  @media (max-width: 425px) {
    .side {
      gap: 0;
    }
  }
`;
