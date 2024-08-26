import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 62%;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 425px) {
    max-width: 100%;
  }
  @media (max-width: 1024px) {
    max-width: 100%;
    margin-left: 0;
    margin-top: 0;
  }
`;
export const Bloco = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  margin-left: 11.25rem;
  margin-top: 1.87rem;
  margin-right: 0;
  @media (max-width: 425px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
  }
  .digite {
    width: 53vw;
    padding: 1rem;
    height: 3rem;
    border: none;
    border-radius: 10px;
    resize: none;
    outline: none;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif, Helvetica;
    font-weight: 500;
    display: flex;
    @media (max-width: 425px) {
      width: 100%;
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  .quadro {
    display: flex;
    align-items: center;
    width: 53vw;
    height: 7.8rem;
    border-radius: 10px;
    border: solid 1px #848484;
    padding: 2rem;
    gap: 2rem;
    @media (max-width: 425px) {
      width: 100%;
      padding: 1rem;
    }
    @media (max-width: 1024px) {
      width: 100%;
      padding: 1rem;
    }
  }
  .digite.ampliado {
    width: 53vw;
    height: 20px;
    padding: 60px;
    border-radius: 0;
    font-size: 0, 81rem;
    background-color: aliceblue;
    border-bottom: solid 2px #25a6ce;
    @media (max-width: 425px) {
      display: none;
    }
    @media (max-width: 1024px) {
      width: 83%;
      height: 0px;
    }
  }
  .avatar {
    width: 2.6rem;
    height: 2.6rem;
  }
  .bnt {
    margin: 20px;
    @media (max-width: 425px) {
      margin: 10px;
    }
    @media (max-width: 1024px) {
      margin: 10px;
    }
  }
  .inputEstilizando {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 3px;
    @media (max-width: 425px) {
      width: 100%;
      padding: 5px;
    }
    @media (max-width: 1024px) {
      width: 100%;
      padding: 5px;
    }
  }
  .botoes {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    @media (max-width: 425px) {
      justify-content: center;
      gap: 10px;
      padding: 4px;
    }
    @media (max-width: 1024px) {
      justify-content: end;
      margin-right: 15px;
      gap: 10px;
      /* padding: 4px; */
    }
  }

  .butaoSecudario {
    padding: 6px;
    border: none;
    border: solid 2px #25a6ce;
    background-color: #fff;
    border-radius: 15px;
    width: 90px;
    cursor: pointer;
    font-family: "Montserrat", sans-serif, Helvetica;
    @media (max-width: 425px) {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      font-size: 10px;
      padding: 5px;
      width: 70px;
    }
    @media (max-width: 1024px) {
      width: 70px;
    }
  }
`;
export const menssagem = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: none;
    background-color: aliceblue;
    border-radius: 3px;
    width: 59rem;
    @media (max-width: 425px) {
      width: 100%;
      padding: 0;
      margin-left: 10px;
    }
    @media (max-width: 1024px) {
      width: 100%;
      padding: 0;
      margin-left: 10px;
    }
  }
  li {
    padding: 30px;
    border: none;
  }
  p {
    font-size: 13px;
  }
  .butoesCaixas {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
  .butoesCaixas button {
    border: none;
    border: solid 1px #25a6ce;
    border-radius: 15px;
    padding: 8px;
    width: 90px;
    cursor: pointer;
    background-color: #ffff;
    @media (max-width: 425px) {
      padding: 4px;
      width: 50px;
      font-size: 8px;
    }
    /* @media (max-width: 1024px) {
      width: 70px;
    } */
  }
  .avatar {
    display: flex;
    width: 130px;
    gap: 7px;
  }
`;
