import img from "../../../Assets/logoPonte.svg";
import Entrada from "../../atoms/Input/index";
import Btn from "../../atoms/Button/index/";
import * as S from "./elementoSenha.style";
function ElementoSenha() {
  const value = "Entrar";
  return (
    <>
      <S.Container>
        <img src={img} alt="" />
        <S.texto>
          <h1>Redefinir senha</h1>
          <p>
            Digite o seu e-mail no campo abaixo e lhe enviaremos um código de
            ativação para redefinição de senha.
          </p>
        </S.texto>
        <Entrada />
        <Btn txt={value} />
      </S.Container>
    </>
  );
}
export default ElementoSenha;
