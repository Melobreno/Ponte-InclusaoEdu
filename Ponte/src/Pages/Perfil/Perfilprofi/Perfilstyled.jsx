import styled from "styled-components";

export const Perf = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  .conteiner1 {
    display: flex;
    flex-direction: column;
    height: 52rem;
    align-items: center;
    justify-content: flex-start;
    text-align: start;
    border-radius: 20px;
    margin-top: 30px;

    p {
      margin-top: 0;
    }
  }

  .box1 {
    height: 10rem;
    width: 77%;
    justify-content: start;
    align-items: center;
    background-color: white;
    border: 1px solid #25a6ce;
    border-radius: 20px;
    display: flex;
    gap: 1rem;
    padding: 10px;

    .nomeProf {
      font-weight: 600;
      margin: 0;
    }

    .ocupacao {
      margin: 0;
      text-align: start;
    }
  }

  .botao {
    display: flex;
    text-align: center;
    align-items: center;
    padding: 1rem 0.4rem;
    height: 2rem;
    border-radius: 20px;
    justify-content: flex-start;
    gap: 1rem;
    width: 77%;
  }

  .btn {
    font-family: "Montserrat";
    width: 6rem;
    height: 2rem;
    text-align: center;
    border-radius: 10px;
    border: none;
    background-color: #25a6ce;
    gap: 1rem;
    color: #fff;
    font-weight: 500;
  }
  .not-connected {
    background-color: #25a6ce;
  }

  .connected {
    background-color: #58da33;
  }
  button:hover {
    transform: scale(1.1);
    transition: all 200ms ease-in-out;
  }

  .box2 {
    height: 25rem;
    width: 77%;
    justify-content: space-around;
    border: 1px solid #25a6ce;
    padding: 10px;
    display: flex;
    padding: 1rem;
    background-color: white;
    border-radius: 20px;
  }

  .sobre {
    width: 36rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
  }

  .box3 {
    width: 36rem;
    border-radius: 20px;
    border: 1px solid #25a6ce;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    .sobre {
      text-align: center;
    }
  }

  .face,
  .insta {
    flex: 1;
    margin: 0.5rem;
    padding: 1rem;
  }

  .conteiner2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }

  @media (max-width: 1024px) {
    .conteiner1 {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .box1 {
      width: 90%;
    }

    .box2 {
      width: 90%;
    }

    .botao {
      justify-content: center;
      width: 90%;
    }

    .sobre {
      width: 100%;
    }

    .box3 {
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    .conteiner1 {
      display: flex;
      padding: 10px;
      height: auto;
    }

    .box1 {
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      padding: 20px;
      gap: 10px;
    }

    .botao {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 100%;
    }

    .btn {
      width: 100%;
    }
    .conteiner2 {
      display: flex;
      justify-content: start;
    }

    .box2 {
      transform: scale(0.9);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-content: center;
      flex-direction: column;
      height: auto;
      width: 100%;
    }

    .sobre {
      width: 100%;
      font-size: 14px;
    }

    .box3 {
      width: 100%;
      padding: 20px;
      transform: scale(0.9);
    }

    .face,
    .insta {
      width: 40px;
      height: 40px;
      padding: 0.5rem;
    }
  }
`;
