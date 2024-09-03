import styled from "styled-components";

export const Container = styled.section`
  position: relative;
`;
export const CirculoAzul = styled.section`
  background-color: #25a6ce;
  width: 55rem;
  height: 56.75rem;
  border-radius: 0rem 50rem 50rem 0rem;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const img = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 425px) {
    display: none;
  }
`;
