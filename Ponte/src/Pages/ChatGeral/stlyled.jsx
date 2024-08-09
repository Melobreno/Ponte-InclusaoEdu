import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  padding: 1.5rem 20%;
  .menuLateral {
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  .search {
    display: flex;
    justify-content: center;
    background-color: #c35e5e;
    padding: 0.5rem;
  }
  input {
    width: 16.3125rem;
    height: 3.625rem;
    border-radius: 0.625rem;
    border: 1px #938e8e;
  }
  .conversa {
    background-color: #a1c35e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.95rem;
  }

  h1 {
    font-family: "Montserrat", sans-serif, Helvetica;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 600;
  }
  p {
    font-family: "Montserrat", sans-serif, Helvetica;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    margin: 0;
    justify-content: end;
  }
  .avatar {
    width: 3.87531rem;
    height: 3.875rem;
  }

  .priscila {
    display: flex;
    width: 18.6875rem;
    height: 6.0625rem;
    padding: 10px;
    /* justify-content: space-between; */
  }
  .lucas {
    display: flex;
    width: 18.6875rem;
    height: 6.0625rem;
    /* justify-content: space-between; */
  }
  .erick {
    display: flex;
    width: 18.6875rem;
    height: 6.0625rem;
    /* justify-content: space-between; */
  }
  .texto {
    display: flex;
    flex-direction: column;

    padding-left: 1rem;
  }
`;
export const Mensagens = styled.div``;
