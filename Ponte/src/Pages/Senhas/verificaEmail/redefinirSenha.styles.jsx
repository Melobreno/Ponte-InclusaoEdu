import styled from "styled-components";

export const Container = styled.section`
  margin-top: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  @media (max-width: 425px) {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    width: 100vw;
  }
`;
