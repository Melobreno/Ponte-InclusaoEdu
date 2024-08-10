import img from "../../../Assets/logoPonte.svg";
import Btn from "../../atoms/Button/index/";
import * as S from "./elementoSenha.style";
function ElementoSenha({ exibirInput, placeholderNova, placeholderRep }) {
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
        <S.inputs>
          {exibirInput && <input type="text" placeholder={placeholderNova} />}
          <input type="text" placeholder={placeholderRep} />
        </S.inputs>
        <Btn txt={value} />
      </S.Container>
    </>
  );
}
export default ElementoSenha;
