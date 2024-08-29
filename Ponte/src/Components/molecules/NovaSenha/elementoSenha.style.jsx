import styled from "styled-components";

export const Container = styled.div`
  transform: scale(1.2);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 6rem;
  gap: 30px;
  .voltar {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: end;
    justify-content: right;

    margin-bottom: 6rem;
    a {
      display: flex;
      text-decoration: none;
      align-items: center;
      margin-right: 0.7rem;
    }
    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
  img {
    width: 300px;
  }
`;

export const texto = styled.div`
  h1 {
    font-size: 2.2rem;
    text-align: center;
    text-transform: capitalize;
  }

  p {
    margin: 0;
    font-size: 12.5px;
    text-align: center;
    width: 290px;
  }
`;
export const inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    width: 17rem;
    height: 2rem;
    border-radius: 0.6rem;
    border: 0.125rem solid #25a6ce;
    outline: none;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  button {
    font-size: 1.04rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    background-color: #25a6ce;
    border: none;
    border-radius: 1.4rem;
    padding: 0.33rem 0.9rem;
    color: #ffff;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 7.7rem;

    &:hover {
      box-shadow: 0 0.33rem 0.7rem rgba(0, 0, 0, 0.37);
      transform: translateY(-1px);
    }

    &:focus {
      outline: none;
    }
  }
`;
