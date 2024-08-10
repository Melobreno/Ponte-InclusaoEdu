import styled from "styled-components";

export const Container = styled.div`
  background-color: #25a6ce;
  font-family: "Montserrat", sans-serif;
  width: 20vw;
  height: 86.8vh;
  border-radius: 0 10px 0 0;
`;

export const TextAvata = styled.div`
  display: flex;
  padding: 30px;
  gap: 13px;
  font-weight: 500;
  justify-content: flex-start;
`;
export const Texto = styled.div`
  background-color: transparent;

  li {
    display: flex;
    list-style-type: none;
    gap: 20px;
    margin-bottom: 30px;
    font-size: 16px;
  }

  .lapis img {
    width: 25px;
  }

  li img {
    width: 20px;
  }

  .iconArrowOpen img {
    width: 15px;
  }

  .iconArrowClosed img {
    width: 15px;
    rotate: -90deg;
  }

  .arquivos img {
    width: 15px;
  }

  .listOpt {
    margin-top: 130px;
  }
`;
