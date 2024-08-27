import { useState } from "react";
import img from "../../../Assets/logoPonte.svg";
import Btn from "../../atoms/Button/index/";
import * as S from "./elementoSenha.style";
import api from "../../../api/api";
function ElementoSenha({ exibirInput, placeholderNova, placeholderRep }) {
  const texto = "Continuar";
  const [valor, setValor] = useState("");
  const [email, setEmail] = useState("");

  const verificaEmail = async () => {
    try {
      const res = await api.get("");
    } catch (error) {}
  };
  return (
    <>
      <S.Container>
        <img src={img} alt="" />
        <S.texto>
          <h1>Redefinir senha</h1>
          <p>
            Para redefinir a senha digite o seu email que está cadastrado na
            plataforma.
          </p>
        </S.texto>
        <S.inputs>
          {exibirInput && (
            <input
              type="email"
              placeholder={placeholderNova}
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder={placeholderRep}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </S.inputs>
        <Btn txt={texto} onclick={verificaEmail} />
      </S.Container>
      <p>{setValor}</p>
    </>
  );
}
export default ElementoSenha;
