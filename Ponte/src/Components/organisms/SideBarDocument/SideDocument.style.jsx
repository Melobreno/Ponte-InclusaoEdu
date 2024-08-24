import styled from "styled-components";


export const nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: aliceblue;
  height: 89vh;
  max-width: 250px;
  border-radius: 0 5px 5px 0;
  font-family: "Montserrat", sans-serif;

  #sidebar-container {
    margin: 10px;
  }
  #infor-usuario {
    display: flex;
    flex-direction: column;
  }
  #usuario {
    display: flex;
    gap: 20px;
    border-bottom: solid 1px #25a6ce;
    width: 100%;
  }
  #infor-usuario span:last-child {
    font-size: 12px;
  }
  #saide_items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    list-style: none;
    padding: 0px;
  }
  .saide-item {
    border-radius: 10px;
    padding: 14px;
    cursor: pointer;
  }
  .saide-item a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
    gap: 20px;
  }

  .saide-item.active {
    background-color: #25a6ce;
  }


  #sair {
    margin: 10px;
  }
  .sair-btn {
    display: flex;
    align-items: center;
    border: none;
    gap: 20px;
    cursor: pointer;
    background-color: aliceblue;
    border-radius: 10px;
    padding: 10px;
  }
  #sideBar.open-sidebar {
    min-width: 15%;

  }
`;
