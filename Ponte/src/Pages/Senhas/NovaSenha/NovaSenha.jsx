import * as S from "./novaSenha.style";
import CirculoImg from "../../../Components/molecules/imgCir/imgCir";
import ElementoSenha from "../../../Components/molecules/ElementoSenha/ElementoSenha";
import Entrada from "../../../Components/atoms/Input/index";

function NovaSenha() {
  return (
    <>
      <S.Container>
        <CirculoImg />
        <ElementoSenha />
      </S.Container>
    </>
  );
}
export default NovaSenha;
