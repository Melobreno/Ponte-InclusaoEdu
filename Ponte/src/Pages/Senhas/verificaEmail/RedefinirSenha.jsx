import CirculoImg from "../../../Components/molecules/imgCir/imgCir";
import VerificaEmail from "../../../Components/molecules/VerificaEmail/ElementoSenha";
import * as S from "./redefinirSenha.styles";
function RedefinirSenha() {
  return (
    <>
      <S.Container>
        <CirculoImg />
        <VerificaEmail />
      </S.Container>
    </>
  );
}
export default RedefinirSenha;
