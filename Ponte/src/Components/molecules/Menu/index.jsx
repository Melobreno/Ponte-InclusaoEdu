import * as S from "./menuStyles";
import Btn from "../../atoms/Button";
import { Link } from "react-router-dom";

function menu() {
  const value = "Login";
  return (
    <S.Container>
      <ul>
        <li>
          <a href="">Sobre nós</a>
        </li>
        <li>
          <a href="">Funcionalidades</a>
        </li>
        <li>
          <a href="">Contatos</a>
        </li>
        <Link to={"/login"}>
          <Btn txt={value} />
        </Link>
        <li>
          <Link to={"/cadastroResp"}>
            <a className="cadastro" href="">
              Cadastro
            </a>
          </Link>
        </li>
      </ul>
    </S.Container>
  );
}

export default menu;
