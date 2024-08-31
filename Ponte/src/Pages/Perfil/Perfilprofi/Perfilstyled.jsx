import styled from "styled-components";

export const Perf = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  .conteiner1 {
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 58rem;
    background-color: #25a6ce;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 20px;
    @media (max-width: 1440px) {
      width: 45rem;
      height: 52rem;
    }
    @media (max-width: 1024px) {
      width: 40rem;
      height: 46rem;
    }
    @media (max-width: 425px) {
      width: 90%;
      height: auto;
      padding: 1rem;
    }
  }

  .box1 {
    height: 14rem;
    width: 18rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    @media (max-width: 1440px) {
      width: 16rem;
      height: 12rem;
    }
    @media (max-width: 1024px) {
      width: 14rem;
      height: 10rem;
    }
    @media (max-width: 425px) {
      width: 80%;
      height: auto;
    }
  }

  .adicionar {
    width: 8rem;
    height: 2rem;
    text-align: center;
    border-radius: 10px;
    border-color: #25a6ce;
    background-color: yellow;
    margin-top: 1rem;
    @media (max-width: 1440px) {
      width: 7rem;
      height: 1.8rem;
      margin-top: 1rem;
    }
    @media (max-width: 1024px) {
      width: 6rem;
      height: 1.6rem;
      margin-top: 2rem;
    }
    @media (max-width: 425px) {
      width: 60%;
      height: auto;
      margin-top: 1rem;
    }
  }

  .box2 {
    height: 22rem;
    width: 18rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    @media (max-width: 1440px) {
      width: 16rem;
      height: 20rem;
    }
    @media (max-width: 1024px) {
      width: 14rem;
      height: 16rem;
    }
    @media (max-width: 425px) {
      width: 80%;
      height: auto;
    }
  }

  .box3 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 0.5rem;
    margin-top: 1rem;
    @media (max-width: 1440px) {
      flex-direction: row;
      width: 100%;
      margin-top: 1rem;
    }
    @media (max-width: 1024px) {
      flex-direction: row;
      width: 100%;
      margin-top: 2rem;
    }
    @media (max-width: 425px) {
      flex-direction: column;
      width: 100%;
      margin-top: 2rem;
    }
  }

  .x,
  .face,
  .insta {
    flex: 1;
    margin: 0.5rem;
    padding: 1rem;
    @media (max-width: 1440px) {
      padding: 0.8rem;
    }
    @media (max-width: 1024px) {
      padding: 0.5rem;
    }
    @media (max-width: 425px) {
      padding: 0.3rem;
      margin: 0.2rem 0;
    }
  }
`;

export const Foto1 = styled.div``;
export const Foto2 = styled.div``;
