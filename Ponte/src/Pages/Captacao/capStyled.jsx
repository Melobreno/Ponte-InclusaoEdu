import styled from "styled-components";

export const SobreNos = styled.div`
  display: flex;
  font-family: "Montserrat-Bold", Helvetica;
  padding: 1.3rem 20%;
  justify-content: space-between;
  height: 400px;

  .textos {
  }

  .textos h1 {
    font-size: 1rem;
    white-space: nowrap;
  }
  .inputs {
    gap: 10px;
    padding: 10px;
    margin-left: 15rem;
  }
  .inputs input {
    width: 28rem;
    height: 3rem;
    border-radius: 0.5rem;
    margin-top: 1.25rem;
    border: 1px solid #000;
  }

  .bigInput textarea {
    min-height: 0.3rem;
    text-align: start;
    width: 29rem;
    border-radius: 0.63rem;
    margin-top: 1.25rem;
    border: 1px solid #000;
  }

  .checkbox {
    margin-top: 1.25rem;
    max-width: max-content;
    display: flex;
    flex-direction: column;
    margin-left: 15.5rem;
    white-space: nowrap;
    gap: 0.5rem;
  }

  .button {
    width: 2rem;
    height: 10rem;
    margin-top: 2rem;
    margin-left: 10.5rem;
  }
`;
