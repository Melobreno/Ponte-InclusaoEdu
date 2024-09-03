import styled from "styled-components";

export const Container = styled.section`
  .main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 180px;
  }
  .animation-bar {
    width: 250px;
    height: 2px;
    background: #cfcfcf;
    overflow: hidden;
    position: relative;
  }
  .animation-bar::before {
    content: "";
    width: 80px;
    height: 2px;
    background: #25a6ce;
    position: absolute;
    left: 280px;
    animation: animation 1.5s infinite ease;
  }
  @keyframes animation {
    0% {
      left: -80px;
    }
    100% {
      left: 250px;
    }
  }
`;
