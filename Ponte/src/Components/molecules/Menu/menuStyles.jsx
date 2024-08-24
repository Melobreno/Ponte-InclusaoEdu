import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.04rem;

  .menu-resp {
    display: none;
  }

  a {
    position: relative;
    text-decoration: none;
    color: #000000;
    transition: all 0.3s ease;
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 1.25rem;
    align-items: center;
  }
  a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.3rem;
    display: block;
    margin-top: 0.4rem;
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

  .menu-toggle {
    display: none;
  }

  .menu-toggle {
    display: none;
    position: relative;
    top: 100%; /* Move abaixo do botão */
    left: 0;
    background-color: white;
    width: 100%;
  }

  .menu-toggle:hover + .menu,
  .menu-toggle:focus + .menu {
    display: block;
  }

  @media (max-width: 1024px) {
    .menu-desk {
      display: none;
    }

    .menu-resp {
      display: flex;
    }

    .menu-title {
      font-weight: 600;
    }

    .menu-resp li {
      position: relative;
      float: left;
    }

    .menu-resp a {
      display: block;
    }

    .menu-resp li a {
      display: block;
    }

    .menu-resp li a:hover {
      color: #000000;
    }

    .menu-resp li ul {
      position: absolute;
      top: 25px;
      margin-top: 15px;
      background-color: #fff;
      display: none;
      padding: 0;
    }

    .menu-resp li:hover ul,
    .menu li.over ul {
      display: block;
    }

    .menu-resp li ul li {
      display: block;
      width: 150px;
      margin-bottom: 5px;
      text-decoration: underline #25a6ce 2.6px;
    }
  }
  @media (max-width: 768px) {
    .menu-resp {
      display: none;
      flex-direction: column;
    }

    .menu-toggle {
      display: block;
      align-self: flex-end;
      cursor: pointer;
    }

    .menu-resp.show {
      display: flex;
      padding: 0;
      margin-right: 20px;
    }

    .menu-resp.show {
      display: flex;
    }

    .menu-toggle img {
      width: 35px;
    }
  }
`;
