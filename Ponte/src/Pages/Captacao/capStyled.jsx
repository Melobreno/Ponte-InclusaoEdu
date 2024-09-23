import styled from "styled-components";

export const SobreNos = styled.div`
  display: flex;
  font-family: "Montserrat-Bold", Helvetica;
  padding: 7rem;

  justify-content: center;
  text-align: start;
  height: 26rem;
  gap: 20px;

  textarea::placeholder {
    padding: 5px 0;
    font-family: "Montserrat-Bold", Helvetica;
  }

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
    border: 1px solid #25a6ce;
    outline: none;
  }

  .bigInput textarea {
    min-height: 0.3rem;
    text-align: start;
    width: 28rem;
    border-radius: 0.63rem;
    margin-top: 1.25rem;
    border: 1px solid #25a6ce;
    outline: none;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
    align-items: center;
  }

  .button .erro {
    color: red;
    margin-top: 5px;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-bottom: 60%;
    margin-top: 10%;

    .textos {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
      font-size: 1rem;
      margin: 0 auto;
    }

    .textos h1 {
      max-width: fit-content;
      font-size: 1.25rem;
      padding: 0 10px;
    }

    .textos p {
      max-width: 95%;
      padding: 0.5rem 0;
    }

    .inputs {
      width: 90%;
      margin: 0 auto;
      padding-top: 0;
    }

    .inputs input,
    .bigInput textarea {
      width: 100%;
      height: 2.5rem;
      margin-top: 0.75rem;
    }

    .checkbox {
      margin: 5% 0;
      font-size: 0.9rem;
      width: 100%;
      gap: 0.75rem;
    }

    form {
      padding: 0.5rem;
    }

    .button {
      margin-top: 1.5rem;
    }

    .button .erro {
      font-size: 0.85rem;
      color: red;
    }
  }
`;
