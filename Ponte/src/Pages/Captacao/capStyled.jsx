import styled from "styled-components";

export const SobreNos = styled.div`
  display: flex;
  font-family: "Montserrat-Bold", Helvetica;
  padding: 1.3rem 20%;
  justify-content: space-between;
  height: 400px;

  /* /* .Textos {
  }
  .inputs {
    display: flex;
    flex-direction: column;

    border-radius: 40px 0px 0px 0px;
    position: absolute;
    right: 0;
    gap: 10px;
  } */
  .inputs {
    gap: 10px;
    padding: 10px;
  }
  .inputs input {
    width: 29rem;
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
    text-align: left;
  }

  .button {
    width: 2rem;
    height: 10rem;
    margin-top: 2rem;
    margin-left: 10.5rem;
  }
`;
