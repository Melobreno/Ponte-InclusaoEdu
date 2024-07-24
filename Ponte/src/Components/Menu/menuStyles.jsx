import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1.04rem;
  position: static;

  a {
    text-decoration: none;
    color: #000000;
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
    align-items: center;
  }

  a:hover {
    animation: ease-in-out 1s;
    transition: opacity 0.5s ease-in;
    font-size: 1.06rem;
  }
`;
