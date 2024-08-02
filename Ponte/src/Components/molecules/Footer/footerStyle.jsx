import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  padding: 1rem 20%;

  ul {
    list-style-type: none;
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
`;

export const TextComple = styled.div`
  p {
    font-size: 0.8rem;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Section = styled.section`
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  bottom: 0;
`;
