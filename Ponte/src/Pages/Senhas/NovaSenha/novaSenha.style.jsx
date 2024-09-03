import styled from "styled-components";

export const Container = styled.section`
  margin-top: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  @media (max-width: 425px) {
    width: auto;
    height: 50vh;
    margin: auto;
    justify-content: center;
  }
`;
