import styled from "styled-components";
import breakpoint from "../../../breakpoints";

export const Section = styled.div`
  display: flex;
  height: 5.18rem;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  padding-bottom: 2.6rem;
  padding-top: 0.7rem;

  .esquerdaNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }

  .inputNav {
    display: flex;
    width: 30rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px) {
      margin: auto;
      width: 700px;
    }
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

    @media (${breakpoint.sm}) {
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
  .logo {
    width: 150px;
  }
  @media (max-width: 425px) {
    transform: scale(1);
    justify-content: center;
    margin: 0;
    padding: 0;
    justify-content: space-around;
    .inputNav {
      width: fit-content;
    }

    .inputNav img {
      width: 130px;
    }
    .userName {
      display: none;
    }
  }
`;
