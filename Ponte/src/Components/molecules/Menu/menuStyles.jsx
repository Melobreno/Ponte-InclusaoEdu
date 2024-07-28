import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.04rem;
  padding: 0 1rem;

  a {
    position: relative;
    text-decoration: none;
    color: #000000;
    transition: all 0.3s ease;
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
    align-items: center;
  }
  a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #25a6ce;
    transition: width 0.3s ease, right 0.3s ease;
  }

  a:hover::after {
    width: 100%;
    right: 0;
  }

  .cadastro {
    font-weight: 700;
    color: #25a6ce;
  }
`;
