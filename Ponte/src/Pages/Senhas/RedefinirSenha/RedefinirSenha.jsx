import CirculoImg from "../../../Components/molecules/imgCir/imgCir";
import ElementoSenha from "../../../Components/molecules/ElementoSenha/ElementoSenha";
import * as S from "./redefinirSenha.styles";
function RedefinirSenha() {
  return (
    <>
      <S.Container>
        <CirculoImg />
        <ElementoSenha placeholderRep={"Seu email"} />
      </S.Container>
    </>
  );
}
export default RedefinirSenha;
