import imgLogo from "../../../Assets/logoPonte.svg";
import * as S from "./style";
function TelaCarregamento() {
  return (
    <>
      <S.Container>
        <div className="main">
          <div className="carregando">
            <img src={imgLogo} alt="logo  " className="logo" />
            <div className="animation-bar"></div>
          </div>
        </div>
      </S.Container>
    </>
  );
}
export default TelaCarregamento;
