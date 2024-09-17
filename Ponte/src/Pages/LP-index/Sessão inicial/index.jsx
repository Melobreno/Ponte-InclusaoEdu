import { Link } from "react-router-dom";
import * as S from "./sobreStyle";
import imgTyping from "../../../assets/Typing-cuate.svg";
import Btn from "../../../Components/atoms/Button";
import { EsqCentro, DirCentro, Surgir } from "../../../Components/motion/index";

function SessaoInit() {
  const value = "Saiba Mais";
  return (
    <>
      <S.Section>
        <S.ContainerEsq>
          <EsqCentro>
            <h1>Um espaço para aprender e crescer juntos.</h1>
            <div className="button">
              <Link to={"/captacao"}>
                <Btn txt={value} />
              </Link>
            </div>
          </EsqCentro>
        </S.ContainerEsq>

        <S.ContainerDir>
          <DirCentro>
            <img src={imgTyping} alt="" />
          </DirCentro>
        </S.ContainerDir>
      </S.Section>
    </>
  );
}

export default SessaoInit;
