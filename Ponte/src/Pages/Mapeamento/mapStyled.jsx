import styled from "styled-components";

export const Map = styled.div`
  font-family: "montserrat";
  display: flex;
  gap: 10%;

  .busca {
    font-size: x-large;
  }

  .nome {
    font-size: large;
    margin: 0.2rem;
  }

  .ocupacao {
    font-size: small;
    margin: 0.2rem;
  }

  .info1 {
    height: 10rem;
    display: flex;
    margin-top: 1rem;
    margin-left: 1rem;
  }

  .info2 {
    display: flex;
    flex-direction: column;
    height: 10rem;
    width: 26rem;
    justify-content: center;
    align-items: start;
    margin-left: 1rem;
  }

  .container2 {
    height: 18rem;
    width: 40rem;
    border: 1px solid gray;
    border-radius: 20px;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .container1 {
    display: flex;
    width: 18rem;
    height: 17rem;
    border: 1.5px solid gray;
    flex-direction: column;
    border-radius: 20px;
    margin-left: 1rem;
    padding: 0.4rem;
  }

  .input {
    display: flex;
    padding: 0.5rem;
    margin: 0.3rem;
    margin-left: 1rem;
    gap: 2px;
  }

  .texto {
    display: flex;
    margin-left: 1.6rem;
  }

  .info1 .dados {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 3rem;
  }

  .card {
    justify-content: center;
    align-items: center;
    height: 42rem;
    width: 40rem;
  }

  .container1 .button {
    padding: 0.8rem;
    text-align: center;
  }

  .button .botao {
    font-size: 1.04rem;
    font-weight: 700;
    background-color: #25a6ce;
    border: none;
    border-radius: 1.4rem;
    padding: 0.33rem 0.9rem;
    color: #ffff;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 7.7rem;
  }

  .content {
    display: flex;
    justify-content: center;
    margin-right: 120px;
  }

  @media (max-width: 1440px) {
    .info2 {
      width: 22rem;
    }

    .container3,
    .container2 {
      width: 35rem;
    }

    .container1 {
      width: 12rem;
      height: 25rem;
    }

    .card {
      height: 38rem;
      width: 35rem;
    }

    .busca {
      font-size: large;
    }

    .nome {
      font-size: medium;
    }

    .ocupacao {
      font-size: x-small;
    }
  }

  @media (max-width: 1024px) {
    .info2 {
      width: 20rem;
    }

    .container3,
    .container2 {
      width: 30rem;
    }

    .container1 {
      width: 10rem;
      height: 22rem;
    }

    .card {
      height: 35rem;
      width: 30rem;
    }

    .busca {
      font-size: large;
    }

    .nome {
      font-size: medium;
    }

    .ocupacao {
      font-size: x-small;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;

    .info1,
    .info2 {
      flex-direction: column;
      margin-left: 0;
      width: 100%;
    }

    .container3,
    .container2,
    .container1,
    .card {
      width: 100%;
      height: auto;
    }

    .container1 {
      margin-left: 0;
      margin-top: 2rem;
    }

    .card {
      height: auto;
    }

    .busca,
    .nome,
    .ocupacao {
      font-size: smaller;
    }
  }
`;

export const Foto1 = styled.div``;
export const Foto2 = styled.div``;
