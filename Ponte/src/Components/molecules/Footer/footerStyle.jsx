import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin: 0 auto;
  gap: 40px;

  ul {
    list-style-type: none;
    a {
      color: black;
      text-decoration: none;
    }
  }
  ul li {
    font-size: 1rem;
  }

  img {
    padding-top: 2rem;
    width: 20rem;
    height: 6rem;
  }
  .Logoimg {
    height: 100%;
    width: fit-content;
  }
  .social {
    display: flex;
    flex-direction: column;
  }
  .social li {
    display: flex;
    gap: 0.125rem;
    text-align: center;
  }

  .social a {
    text-decoration: none;
    color: black;
  }

  .social img {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0;
    padding: 0.1rem;
  }

  .social p {
    margin: 0;
    padding: 0;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 1024px) {
    transform: scale(0.8);
    max-width: 425px;
  }
  @media (max-width: 425px) {
    margin-left: -20px;
    .logoPonte {
      display: none;
    }

    ul {
      padding: 0;
    }
  }
`;

export const TextComple = styled.div`
  p {
    font-size: 0.8rem;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    padding: 0;
  }
`;

export const Section = styled.footer`
  margin: 0 auto;
  bottom: 0;

  @media (max-width: 425px) {
    transform: scale(0.7);
  }
`;
