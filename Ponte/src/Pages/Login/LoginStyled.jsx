import styled from "styled-components";

export const Section = styled.div`
  font-family: "Montserrat", Helvetica;
  display: flex;
  max-height: 100vh;
  justify-content: center;
  gap: 200px;

  @media (max-width: 1440px) {
    gap: 100px;
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Fundo = styled.div`
  background-color: #25a6ce;
  width: 55rem;
  height: 55.75rem;
  border-radius: 0rem 50rem 50rem 0rem;
  margin-top: 2rem;

  @media (max-width: 1440px) {
    width: 60rem;
    height: 50rem;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1024px) {
    width: 30rem;
    height: 40rem;
    border-radius: 0rem 50rem 50rem 0rem;
    margin-top: 1rem;
    margin-left: 4rem;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const Imagem = styled.div`
  width: 31.18rem;
  height: 31.1875rem;
  margin: 13rem 5.31rem 13rem 15rem;

  @media (max-width: 1440px) {
    width: 25rem;
    height: 30rem;
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 30rem;
    margin: 5rem 2rem;
  }

  @media (max-width: 425px) {
    width: 15rem;
    height: 15rem;
    margin: 2rem 1rem;
  }
  img {
    @media (max-width: 1440px) {
      display: flex;
      align-items: center;
      width: 30rem;
      height: 30rem;
      margin-left: 1.8rem;
    }
    @media (max-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25rem;
      height: 25rem;
      margin: 5rem 2rem;
    }
  }
`;

export const Container = styled.div`
  display: inline-block;
  width: 27.8rem;
  height: 44.4rem;
  margin: 5rem 21rem 12rem 4rem;

  @media (max-width: 1440px) {
    margin: 4rem 15rem 0 0;
    width: 27.8rem;
    height: 44.4rem;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 4rem 15rem;
    width: 20rem;
    height: 44.4rem;
    margin: 5rem 16rem 12rem 4rem;
  }

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 1rem auto;
  }

  h1 {
    width: 100%;
    height: 2.9375rem;
    color: #000;
    text-align: center;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media (max-width: 1024px) {
      font-size: 2rem;
    }

    @media (max-width: 425px) {
      font-size: 1.5rem;
    }
  }
  .link {
    @media (max-width: 425px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
      height: auto;
      padding: 1rem;
    }
  }

  img {
    padding: 2rem;
    margin-top: 2rem;
    width: 23.375rem;
    height: 8.0625rem;

    @media (max-width: 1440px) {
      width: 20rem;
      height: 7rem;
    }

    @media (max-width: 1024px) {
      padding: 0;
      margin-top: 7rem;
      width: 18rem;
      height: 6rem;
    }

    @media (max-width: 425px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
      height: auto;
      padding: 1rem;
      margin: 0;
    }
  }

  .loginContainer {
    margin-top: 3.44rem;
    width: 100%;
    height: 25.25rem;
    flex-direction: column;
    text-align: center;

    @media (max-width: 1024px) {
      margin-top: 0;
    }
    @media (max-width: 425px) {
      margin-top: 2rem;
    }
  }

  p {
    color: #000;
    text-align: left;
    margin: 0.94rem 0 0.3rem 3.31rem;
    font-size: 0.8125rem;
    font-weight: 500;
    @media (max-width: 1440px) {
      margin-left: 6%;
    }
    @media (max-width: 1024px) {
      margin-left: 1%;
    }

    @media (max-width: 425px) {
      margin: 0.94rem 1rem;
      font-size: 0.7rem;
    }
  }

  .botao {
    padding: 50px;
    margin-top: 3px;

    @media (max-width: 425px) {
      padding: 20px;
    }
  }
  .botao button {
    width: 123px;
    height: 30px;
    margin-bottom: 15px;

    @media (max-width: 1024px) {
      width: 100px;
      height: 28px;
    }

    @media (max-width: 425px) {
      width: 80px;
      height: 33px;
    }
  }

  .botao span {
    font-size: 14px;
    color: #ff0000;
    font-weight: 500;

    @media (max-width: 425px) {
      font-size: 12px;
    }
  }
  .esqueceuSenha {
    display: flex;
    color: #000;
    text-decoration: none;

    justify-content: flex-end;
    margin: 0.3rem 3.31rem 0 0;
    font-size: 0.8125rem;
    transition: transform 0.2s ease-in-out;
    @media (max-width: 1440px) {
      justify-content: flex-start;
      width: 40%;
      margin-left: 1.4rem;
    }

    @media (max-width: 1024px) {
      justify-content: flex-start;
      width: 50%;
      margin-left: 1%;
    }
    @media (max-width: 425px) {
      margin: 0.3rem 1rem;
      font-size: 0.7rem;
    }

  }

  .esqueceuSenha:hover {
    transform: scale(1.02);
  }

  .cadastre {
    font-size: 0.8125rem;
    font-weight: 500;

    @media (max-width: 425px) {
      font-size: 0.7rem;
    }
  }

  .cadastre a {
    font-size: 0.8125rem;
    font-weight: 500;
    transition: transform 0.2s ease-in-out;
    color: #25a6ce;

    @media (max-width: 425px) {
      font-size: 0.7rem;
    }
  }

  .cadastre a:hover {
    transform: scale(1.02);
  }

  input {
    width: 21.0625rem;
    height: 2.4rem;
    border-radius: 0.625rem;
    border: 0.125rem solid #25a6ce;
    background: #fff;

    @media (max-width: 1024px) {
      width: 18rem;
    }

    @media (max-width: 425px) {
      width: 90%;
    }
  }
`;
