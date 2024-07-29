import * as S from "./sobreStyle";
import imgTyping from "../../../assets/Typing-cuate.svg";
import Btn from "../../../Components/atoms/Button";
// import seta from "../../../assets/triangle.svg";

function SessaoInit() {
  const value = "Saiba Mais";
  return (
    <>
      <S.Section>
        <S.ContainerEsq>
          <h1>Um espaço para aprender e crescer juntos.</h1>
          <div className="button">
            <Btn txt={value} /> {/*Colocar o value de Saiba Mais com props*/}
          </div>
        </S.ContainerEsq>

        <S.ContainerDir>
          <img src={imgTyping} alt="" />
        </S.ContainerDir>
      </S.Section>
    </>
  );
}

export default SessaoInit;
