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
      </S.Container>
    </>
  );
}
export default SaidDocumentacao;
