import styled from "styled-components";
export const Section = styled.div`
  display: flex;
  height: 5.18rem;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  font-size: 1.25rem;
  font-weight: 550;
  font-family: "Montserrat", sans-serif;

  .esquerdaNav {
    display: flex;
    width: 39rem;
    justify-content: space-between;
    align-items: center;
  }

  .inputNav {
    display: flex;
    margin-left: 3rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1150px) {
      margin: auto;
      width: auto;
    }
  }

  .direitaNav {
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-right: 8rem;
    gap: 10px;
  }
  .linkHome {
    justify-content: space-between;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 2rem;
    text-decoration: none;
    color: black;
  }
  .inicio {
    text-align: center;
  }

  .pesquisa {
    display: flex;
    width: 18rem;
    height: 2rem;
    border-radius: 1.25rem;
    border: 0.13rem solid #25a6ce;

    @media (max-width: 1150px) {
      display: none;
    }
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

  .userName {
    width: 9rem;
    text-align: center;
  }

  .avatar {
    width: 2.625rem;
    height: 2.62469rem;
  }
  .logo {
    width: 150px;
  }
  @media (max-width: 425px) {
    justify-content: space-between;
    width: 100vw;
    margin: 0;
    padding: 0;
    gap: 10%;
    font-size: 0.8rem;

    .logo {
      width: 150px;
    }

    .direitaNav {
      margin: 0;
    }

    .userName {
      width: auto;
    }
  }
`;
