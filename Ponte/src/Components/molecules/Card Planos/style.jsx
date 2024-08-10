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
  width: 280px;
  height: 400px;

  .cardHeader h2 {
    color: #fff;
    text-align: center;
  }

  .containerInform {
    padding: 10px 0 0 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    gap: 10px;
    background-color: #fff;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    height: 270px;
  }

  .productInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }

  .contentInfo {
    max-width: fit-content;
  }

  .contentInfo span {
    margin-left: 15px;
  }

  .contentInfo img {
    width: 15px;
  }

  button {
    margin-top: 50px;
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
