import * as S from "./menuStyles";
import Btn from "../../atoms/Button";

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
        <Btn txt={value} />
        <li>
          <a className="cad" href="">
            Cadastro
          </a>
        </li>
      </ul>
    </S.Container>
  );
}

export default menu;
