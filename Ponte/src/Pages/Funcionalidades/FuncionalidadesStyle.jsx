import styled from 'styled-components';

export const Titulo = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 2.25rem;
    font-family: 'Montserrat-Bold', Helvetica;

    background-color: #f6cf00;
    border-radius: 3.125rem;
    padding: 0.563rem 1.88rem;
    margin: 7.63rem 31.44rem 0rem 31.44rem;
  }
`;

export const Opcoes = styled.div`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    padding: 3.75rem 2.6875rem;

    list-style: none;
    margin: 14.3rem 6.88rem 0.28rem 0.36rem;
    gap: 1.88rem;
  }

  li {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    background-color: #f6cf00;
    cursor: pointer;
    border-radius: 1.88rem;
    width: 31.8rem;
    height: 3.75rem;
    padding: 0 1.5rem;
  }

  a {
    font-size: 1.25rem;
    font-family: 'Montserrat', Helvetica;
    font-weight: 600;
    text-decoration: none;
    color: black;
  }

  .imgMais {
    max-width: fit-content;
    margin: 0px;
  }

  img {
    margin: 13.1rem 2.69rem 9.88rem 4rem;
  }
`;
