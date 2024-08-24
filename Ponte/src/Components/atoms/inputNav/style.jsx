import styled from "styled-components";

export const Container = styled.section`
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
`;
