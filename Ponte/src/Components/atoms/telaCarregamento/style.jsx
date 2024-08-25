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
    width: 80px;
    height: 80px;
  }
  .animation-bar {
    width: 150px;
    height: 2px;
    background: #cfcfcf;
    overflow: hidden;
    position: relative;
  }
  .animation-bar::before {
    content: "";
    width: 75px;
    height: 2px;
    background: #25a6ce;
    position: absolute;
    left: 180px;
    animation: animation 1.5s infinite ease;
  }
  @keyframes animation {
    50% {
      left: -96px;
    }
  }
`;
