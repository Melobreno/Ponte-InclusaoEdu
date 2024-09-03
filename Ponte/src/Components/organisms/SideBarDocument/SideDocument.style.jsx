import styled from "styled-components";

export const nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: aliceblue;
  height: 90vh;
  max-width: 250px;
  border-radius: 0 5px 5px 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  @media (max-width: 425px) {
    align-items: start;
    width: 80px;
  }

  #sidebar-container {
    margin: 10px;
  }
  #infor-usuario {
    display: flex;
    flex-direction: column;
  }

  .item-descricao {
    text-align: start;
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
  #ul_items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    list-style: none;
    padding: 0px;
  }
  .side-item {
    border-radius: 10px;
    padding: 14px 2px;
    cursor: pointer;
  }

  .side-item a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
    gap: 15px;
    @media (max-width: 425px) {
      justify-content: center;
    }
  }

  .side-item span:hover {
    transition: all 10ms ease-in-out;
    transform: scale(1.03);
    font-weight: 500;
  }

  #sair {
    margin-bottom: 4rem;
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
  @media (max-width: 425px) {
    .item-descricao {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
    }
  }
`;
