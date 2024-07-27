import styled from "styled-components";

export const Container = styled.button`
  font-size: 1.04rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  background-color: #25a6ce;
  border: none;
  border-radius: 20px;
  padding: 6px 15px;
  color: #ffff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.37);
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }
`;
