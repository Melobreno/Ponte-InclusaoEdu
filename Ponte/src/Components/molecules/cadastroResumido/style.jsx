import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 88vh;
  width: 60vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    margin: 0;
    width: auto;
    height: auto;
  }
  .fotoAvatar {
    @media (max-width: 425px) {
      display: none;
    }
  }
`;
