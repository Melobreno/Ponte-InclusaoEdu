import styled from "styled-components";
import breakpoint from "../../../breakpoints";
export const Section = styled.div`
  display: flex;
  height: 5.18rem;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  .imgLupa img {
    width: 18px;
  }

  @media (max-width: 425px) {
    transform: scale(0.37);
    justify-content: center;
    margin: 0;
    padding: 0;
    gap: 18rem;
  }

  .esquerdaNav {
    display: flex;
    width: 39rem;
    justify-content: space-between;
    align-items: center;
  }

  .inputNav {
    display: flex;
    margin-left: 20px;
    width: 50rem;
    justify-content: space-between;
    align-items: center;
    @media (${breakpoint.sm}) {
      margin: auto;
      width: auto;
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
`;
