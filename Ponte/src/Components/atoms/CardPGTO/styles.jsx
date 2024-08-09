import styled from "styled-components";

export const ContainerOpt = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: 400px;
  height: 70px;
  background-color: #eef7ff;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 8px;
  justify-content: space-between;

  select {
    font-family: "Montserrat", sans-serif;
    padding: 4px;
    border: none;
    border-radius: 10px;
  }

  .contentInfo {
    display: flex;
    align-items: center;
    height: 35px;
  }

  .contentInfo img {
    width: 25px;
    margin: 0 5px;
  }
`;
