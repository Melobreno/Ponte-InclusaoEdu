import { useState } from "react";
import img from "../../../Assets/Logo8.svg";
import Btn from "../../atoms/Button/index/";
import * as S from "./elementoSenha.style";
function ElementoSenha({ exibirInput, placeholderNova, placeholderRep }) {
  const texto = "Entrar";
  const [valor, setValor] = useState("");
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
          {exibirInput && (
            <input
              type="text"
              placeholder={placeholderNova}
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          )}
          <input type="text" placeholder={placeholderRep} />
        </S.inputs>
        <Btn txt={texto} />
      </S.Container>
      <p>{setValor}</p>
    </>
  );
}
export default ElementoSenha;
