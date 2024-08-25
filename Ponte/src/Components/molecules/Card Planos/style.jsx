import styled from "styled-components";

export const cardSection = styled.div`
  font-family: "Montserrat", sans-serif;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => {
    switch (props.nomeProp) {
      case "Basic":
        return "rgba(94, 94, 94, 1)";
      case "Premium":
        return "rgba(37, 166, 206, 1)";
      default:
        return "rgba(94, 94, 94, 1)";
    }
  }};
  width: 300px;
  height: 430px;

  .containerValue {
    height: 3rem;
  }
  .cardHeader h2 {
    color: #fff;
    text-align: center;
    height: 1.7rem;
    display: flex;
    justify-content: center;
  }

  .containerInform {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    gap: 5px;
    background-color: #fff;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    height: 285px;
  }

  .productInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }

  .contentInfo {
    display: flex;
    text-align: left;
    max-width: fit-content;
    width: 16rem;
  }

  .contentInfo span {
    margin-left: 15px;
    padding: 4px;
  }

  .contentInfo img {
    width: 15px;
  }

  button {
    margin-top: 30px;
    background-color: ${(props) => {
      switch (props.nomeProp) {
        case "Basic":
          return "rgba(94, 94, 94, 1)";
        case "Premium":
          return "rgba(37, 166, 206, 1)";
        default:
          return "rgba(94, 94, 94, 1)";
      }
    }};
  }
`;
