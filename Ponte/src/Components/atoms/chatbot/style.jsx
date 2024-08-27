import styled from "styled-components";

export const Container = styled.div`
  #chatbot-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff;
    color: white;
    padding: 12px;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }

  #chatbox {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 400px;
    height: 500px;
    background-color: white;
    border: 1px solid #ffd000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }

  #chatbox iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .hidden {
    display: none;
  }
`;
