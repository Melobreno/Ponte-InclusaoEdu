import styled from "styled-components";

export const ContainerSec = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 20%;
  @media (max-width: 1440px) {
    padding: 4rem 15%;
  }
  @media (max-width: 1024px) {
    padding: 4rem 10%;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    padding: 3rem 5%;
  }

  .sectionForma {
    font-family: "Montserrat";
    background-color: #ffffff;
    width: 100%;
    height: auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (max-width: 1024px) {
      max-width: 90%;
    }

    @media (max-width: 425px) {
      width: 100%;
    }
  }

  .tituloSec {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
    @media (max-width: 1440px) {
      font-size: 1.8rem;
    }

    @media (max-width: 1024px) {
      font-size: 1.6rem;
    }

    @media (max-width: 425px) {
      font-size: 1.5rem;
    }
  }

  .containerForma {
    display: flex;
    gap: 40px;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 1440px) {
      gap: 30px;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  .contentFormaPagamento {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid black;
    width: 450px;
    height: auto;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    @media (max-width: 1440px) {
      width: 400px;
    }
    @media (max-width: 1024px) {
      width: 90%;
    }
    @media (max-width: 425px) {
      width: 100%;
      padding: 10px;
    }
  }
  .precoAVista h3 {
    margin-bottom: 1rem;
    @media (max-width: 425px) {
      text-align: center;
    }
  }

  .formasDePagamento {
    text-align: left;
    p {
      margin-bottom: 0.5rem;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000000;
      font-size: 14px;
      margin-top: 1rem;
      text-decoration: none;
      @media (max-width: 425px) {
        justify-content: center;
      }
      img {
        margin-right: 0.5rem;
      }
    }
  }

  .card {
    display: grid;
    margin-left: 1.5rem;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 22rem;
    @media (max-width: 1440px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 425px) {
      grid-template-columns: 1fr;
    }

    label {
      display: flex;
      font-size: 14px;
      margin-bottom: 0.3rem;
    }

    input {
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      border-radius: 0.2rem;
      border: 1px solid black;

      @media (max-width: 425px) {
        width: 20rem;
      }
    }
  }
  .contentResumo {
    border: 1px solid black;
    width: 450px;
    height: 29rem;
    padding: 20px;
    border-radius: 10px;
    font-size: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;
    @media (max-width: 1440px) {
      width: 420px;
    }

    @media (max-width: 1024px) {
      width: 90%;
    }

    @media (max-width: 425px) {
      width: 95%;
    }
    .tituloRes {
      margin-top: 5px;
      margin-bottom: 1rem;
      text-align: center;
      font-size: 18.7px;
    }
    .contentItens,
    .contentTotal {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.25rem;
      @media (max-width: 425px) {
        flex-direction: column;
        text-align: left;
      }
    }
    .contentDetalhes {
      text-align: left;
      @media (max-width: 425px) {
        text-align: left;
      }

      h3 {
        margin-bottom: 0.5rem;
      }

      ul {
        list-style: disc;
        margin-left: 20px;
        @media (max-width: 425px) {
          list-style: none;
          margin-left: 0;
          padding: 0;
        }

        li {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  .containerBtn {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 50%;
    }
    @media (max-width: 1440px) {
      margin-top: 1.2rem;
    }

    @media (max-width: 425px) {
      flex-direction: column;
      width: 100%;
      button {
        width: 50%;
      }
    }
  }
`;
