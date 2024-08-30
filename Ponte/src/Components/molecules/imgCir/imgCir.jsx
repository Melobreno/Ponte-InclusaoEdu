import img from "../../../Assets/Vetoredsenha.svg";
import * as S from "./imgCir.style";

function CirculoImg() {
  return (
    <>
      <S.Container>
        <S.CirculoAzul>
          <S.img>
            <img src={img} alt="Vetor de senha" />
          </S.img>
        </S.CirculoAzul>
      </S.Container>
    </>
  );
}

export default CirculoImg;
