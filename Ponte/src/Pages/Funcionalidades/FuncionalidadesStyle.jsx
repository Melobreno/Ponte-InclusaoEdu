import styled from 'styled-components';
import background from '../../Assets/img/EfeitosFuncion.png';

export const Section = styled.div`
  height: 43.75rem;
`;

export const Fundo = styled.div`
  background-image: url(${background});
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;

  width: 100vw;
  height: 100vh;
`;

export const Titulo = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 2.25rem;
    font-family: 'Montserrat-Bold', Helvetica;

    background-color: #f6cf00;
    border-radius: 3.125rem;
    padding: 0.563rem 1.88rem;
    margin: 6rem 31.44rem 0rem 31.44rem;
  }
`;

export const Opcoes = styled.div`
  display: flex;
  justify-content: center;

  section {
    height: 14.3rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 10rem;
    list-style: none;
    gap: 1.65rem;
  }

  li {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: space-between;
  }

  summary {
    background-color: #f6cf00;
    cursor: pointer;
    border-radius: 1.88rem;
    width: 31.8rem;
    height: 3.75rem;
    padding: 0 1.5rem;
    font-size: 1.25rem;
    display: flex;
    flex-direction: row;

    margin: 0 6.88rem 0rem 0.36rem;

    align-items: center;
    justify-content: space-between;

    font-family: 'Montserrat', Helvetica;
    font-weight: 600;
    text-decoration: none;
    color: black;
  }

  p {
    color: #000;
    font-family: 'Montserrat', Helvetica;
    font-size: 1.25rem;
    font-weight: 500;
    max-width: 34rem;
    padding: 0 1rem;
    margin: 0.5rem 0;
  }

  .imgMais {
    max-width: fit-content;
    margin: 0px;
  }

  img {
    margin: 10rem 2.69rem 9.88rem 4rem;
  }
`;
