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
    height: 1.87rem;
    width: 20rem;
    border-radius: 10px;
    border: 1px solid #25a6ce;
    padding: 0.2rem;
  }

  select {
    margin-top: 15px;
    height: 30px;
    align-self: center;
    height: 1.87rem;
    width: 20rem;
    border-radius: 10px;
    border: 1px solid #25a6ce;
    padding: 0.2rem;
    outline: none;
  }

  .containerBtn {
    display: flex;
    justify-content: center;
    padding: 1rem 20%;
    padding-bottom: 0;
  }

  .cadastroResp {
    margin: 0;
    font-size: 16px;
    text-align: center;
  }

  .cadastroResp p {
    text-decoration: none;
  }
  .cadastroResp span {
    color: #25a6ce;
    text-decoration: underline;
  }
`;
