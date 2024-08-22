import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  height: 5.1875rem;
  justify-content: center;
  padding: 1.3rem 0;
  margin: 0 auto;
  align-items: center;

  .esquerdaNav {
    display: flex;
    width: 39rem;
    justify-content: space-between;
    align-items: center;
    gap: 4.5rem;
  }

  .inputNav {
    display: flex;
    width: 50rem;
    justify-content: space-between;
    align-items: center;
  }

  .direitaNav {
    justify-content: space-between;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .pesquisa {
    display: flex;
    width: 18rem;
    height: 2rem;
    border-radius: 1.25rem;
    border: 0.13rem solid #25a6ce;
  }

  .lupa {
    width: 15rem;
    border: none;
    resize: none;
    outline: none;
    margin-left: 1rem;
  }
  button {
    all: unset;
    cursor: pointer;
  }
  p {
    width: 9rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
  }

  .avatar {
    width: 2.625rem;
    height: 2.62469rem;
  }
`;
