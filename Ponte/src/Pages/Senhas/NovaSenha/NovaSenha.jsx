import * as S from "./novaSenha.style";
import CirculoImg from "../../../Components/molecules/imgCir/imgCir";
import ElementoSenha from "../../../Components/molecules/ElementoSenha/ElementoSenha";
import { useState } from "react";

function NovaSenha() {
  const [mostraDoisInputs] = useState(true);
  const value = "Digite sua senha";
  return (
    <>
      <S.Container>
        <CirculoImg />
        <ElementoSenha exibirInput={mostraDoisInputs} />
      </S.Container>
    </>
  );
}
export default NovaSenha;
