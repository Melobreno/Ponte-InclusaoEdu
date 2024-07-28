import styled from "styled-components";

export const Container = styled.button`
  font-size: 1.04rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  background-color: #25a6ce;
  border: none;
  border-radius: 1.4rem;
  padding: 0.33rem 0.9rem;
  color: #ffff;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 7.7rem;

  &:hover {
    box-shadow: 0 0.33rem 0.7rem rgba(0, 0, 0, 0.37);
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }
`;
