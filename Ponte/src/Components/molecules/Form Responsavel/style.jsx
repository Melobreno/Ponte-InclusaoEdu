import styled from "styled-components";

export const FormSection = styled.section`
  font-family: "Montserrat", sans-serif;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 1rem;

  .formContainer {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    max-width: 1200px;
  }

  .formDiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .formContainer label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .formContainer button {
    width: 150px;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .optionSex {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
    gap: 10px;
  }

  input,
  select {
    margin-top: 7px;
    border-radius: 10px;
    border: 1px solid #25a6ce;
    padding: 0.2rem;
    width: 100%;
    box-sizing: border-box;
  }

  input {
    height: 2.5rem;
  }

  select {
    height: 2.5rem;
  }

  .containerBtn {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .cadastroProf {
    margin: 0;
    font-size: 16px;
    text-align: center;
  }

  .cadastroProf p {
    text-decoration: none;
  }

  .cadastroProf span {
    color: #25a6ce;
    text-decoration: underline;
  }

  @media (max-width: 1440px) {
    .formContainer {
      padding: 0 2rem;
    }
  }

  @media (max-width: 1024px) {
    .formDiv {
      grid-template-columns: 1fr;
    }

    .formContainer {
      padding: 0 1rem;
    }
  }

  @media (max-width: 425px) {
    .formContainer {
      padding: 0 0.5rem;
    }

    .formContainer button {
      width: 100%;
    }
  }
`;
