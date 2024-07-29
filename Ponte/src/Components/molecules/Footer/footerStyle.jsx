import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  width: 90rem;
  height: 10rem;

  ul {
    list-style-type: none;
  }
  ul li {
    font-size: 1rem;
  }

  img{
    width: 20rem;
    height: 6rem;
    
  }
  .Logoimg{
    height: 100%;
    width: fit-content;
  }
`;

export const TextComple = styled.div`
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    font-family: "Montserrat", sans-serif;
  }
`;
