import img from "../../../Assets/Group.svg";
import * as S from "./SaidDocument.style";
function SaidDocumentacao() {
  return (
    <>
      <S.Container>
        <S.TextAvata>
          <img src={img} alt="" />
          <p>Lucas Melo</p>
        </S.TextAvata>
        <S.Texto>
          <ul>
            <li>Favoritos</li>
            <li>Documentos</li>
            <li>Pasta de documento</li>
          </ul>
          <div>Linha</div>
        </S.Texto>
      </S.Container>
    </>
  );
}
export default SaidDocumentacao;
