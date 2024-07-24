import * as S from './menuStyles';
import Btn from '../Button/button';

function menu() {
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
        <Btn />
        <a href="" className="testeA">
          Cadastro
        </a>
      </ul>
    </S.Container>
  );
}

export default menu;
