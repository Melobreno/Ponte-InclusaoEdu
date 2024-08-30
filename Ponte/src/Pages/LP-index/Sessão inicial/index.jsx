import { Link } from "react-router-dom";
import * as S from "./sobreStyle";
import imgTyping from "../../../Assets/Typing-cuate.svg";
import Btn from "../../../Components/atoms/Button";

function SessaoInit() {
  const value = "Saiba Mais";
  return (
    <>
      <S.Section>
        <S.ContainerEsq>
          <h1>Um espaço para aprender e crescer juntos.</h1>
          <div className="button">
            <Link to={"/captacao"}>
              <Btn txt={value} />
            </Link>
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
