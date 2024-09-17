import * as S from "./menuStyles";
import Btn from "../../atoms/Button";
import { Link } from "react-router-dom";
import HamMenu from "../../../assets/hamburger.svg";
import { useState } from "react";
import imgLo from "../../../assets/logoPonte.svg";

function menu() {
  const value = "Login";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.Container>
      <div className="nav">
        <Link to={"/"}>
          <img src={imgLo} alt="" />
        </Link>
      </div>
      <ul className="menu-desk">
        <li>
          <a href="#sobre">Sobre nós</a>
        </li>
        <li>
          <a href="#funcionalidade">Funcionalidades</a>
        </li>
        <li>
          <a href="#contato">Contatos</a>
        </li>
        <Link to={"/login"}>
          <Btn txt={value} />
        </Link>
        <li>
          <Link to={"/cadastro"}>
            <a className="cadastro" href="">
              Cadastro
            </a>
          </Link>
        </li>
      </ul>

      <div className="menu-container">
        <div className="menu-toggle" onClick={toggleMenu}>
          <img src={HamMenu} alt="hamburger-menu" className="imgTog" />
        </div>

        <ul className={`menu-resp ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a className="menu-title">Seções</a>
            <ul className="drop-menu">
              <li>
                <a href="#sobre">Sobre nós</a>
              </li>
              <li>
                <a href="#funcionalidade">Funcionalidades</a>
              </li>
              <li>
                <a href="#contato">Contatos</a>
              </li>
            </ul>
          </li>
          <li className="btn">
            <Link to={"/login"}>
              <Btn txt={value} />
            </Link>
          </li>
          <li className="btn">
            <Link to={"/cadastro"}>
              <a className="cadastro">Cadastro</a>
            </Link>
          </li>
        </ul>
      </div>
    </S.Container>
  );
}

export default menu;
