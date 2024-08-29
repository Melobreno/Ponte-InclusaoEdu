import styled from "styled-components";

export const ContainerOpt = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  height: 60px;
  background-color: #eef7ff;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 8px;
  justify-content: space-between;

  @media (max-width: 1440px) {
    max-width: 350px;
    height: 55px;
  }

  @media (max-width: 1024px) {
    max-width: 300px;
    height: 50px;
    gap: 5px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
    height: auto;
    padding: 3px;
  }

  select {
    font-family: "Montserrat", sans-serif;
    padding: 4px;
    border: none;
    border-radius: 10px;
    width: 100%;

    @media (max-width: 425px) {
      width: 100%;
    }
  }

  .contentInfo {
    display: flex;
    align-items: center;
    height: 35px;

    @media (max-width: 425px) {
      height: auto;
      margin-bottom: 5px;
    }
  }

  .contentInfo img {
    width: 25px;
    margin: 0 5px;

    @media (max-width: 1440px) {
      width: 20px;
    }

    @media (max-width: 1024px) {
      width: 18px;
    }

    @media (max-width: 425px) {
      width: 20px;
    }
  }

  .contentParc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 425px) {
      width: 100%;
    }
  }
`;
