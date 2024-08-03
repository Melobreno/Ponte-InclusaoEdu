import styled from "styled-components";

export const SobreNos = styled.div`
  display: flex;
  font-family: "Montserrat-Bold", Helvetica;
  padding: 1.5rem 20%;
  justify-content: center;
  text-align: start;
  height: 36rem;
  gap: 20px;

  .textos {
    padding-top: 1rem;
  }

  .textos p {
    width: 500px;
    margin: 0;
    padding: 1rem 0;
    font-weight: 500;
    font-size: 1.1rem;
  }

  .textos h1 {
    font-size: 1.4rem;
  }
  .inputs {
    padding-top: 1rem;
    width: 16rem;
  }

  .container {
    display: flex;
    flex-direction: column;
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
    width: 28rem;
    border-radius: 0.63rem;
    margin-top: 1.25rem;
    border: 1px solid #000;
  }

  .checkbox {
    width: 29rem;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    gap: 0.5rem;
  }

  div .politicSpan {
    color: #25a6ce;
    text-decoration: underline;
  }

  .button {
    width: 2rem;
    height: 10rem;
    margin-top: 2rem;
    margin-left: 10.5rem;
  }
`;
