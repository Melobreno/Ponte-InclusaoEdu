import styled from "styled-components";

export const FormSection = styled.section`
  font-family: "Montserrat", sans-serif;
  margin-left: 10px;
  display: flex;
  padding: 1.3rem 20%;
  justify-content: center;

  .formContainer {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .formDiv {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  .formContainer label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .formContainer button {
    width: 150px;
  }

  .optionSex {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
    gap: 10px;
  }

  input {
    margin-top: 7px;
    height: 30px;
  }

  select {
    margin-top: 13px;
    height: 30px;
    align-self: center;
  }
`;
