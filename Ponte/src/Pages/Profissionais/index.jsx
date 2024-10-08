import * as S from "./style";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import Pesquisa from "../../Components/molecules/BarraPesquisa";
import imgVetor2 from "../../assets/avatar2.svg";
import imgVetor3 from "../../assets/avatar3.svg";
import { Link } from "react-router-dom";
import { Surgir } from "../../Components/motion";

function Profissionais() {
  return (
    <>
      <Pesquisa />
      <S.Container>
        <SideDocumentacao />
        <S.Bloco>
          <Surgir>
            <div className="tituloh2">
              <h2>Profissionais</h2>
            </div>
            <S.Arquivos>
              <div className="containerFunc">
                <span>
                  <img src={imgVetor2} alt="" />
                </span>
                <Link to={"/perfilprof"}>
                  <p>
                    Priscila Silva -
                    <span className="especializacao"> Fonoaudiologa</span>
                  </p>
                </Link>
              </div>
              <div className="containerFunc">
                <span>
                  <img src={imgVetor3} alt="" />
                </span>
                <p>
                  Erick Oliveira{" "}
                  <span className="especializacao"> - Terapeuta</span>
                </p>
              </div>
              <div className="containerFunc">
                <span>
                  <img src={imgVetor2} alt="" />
                </span>
                <p>
                  Sabrina Souza{" "}
                  <span className="especializacao">
                    {" "}
                    - Terapeuta Ocupacional
                  </span>
                </p>
              </div>
              <div className="containerFunc">
                <span>
                  <img src={imgVetor3} alt="" />
                </span>
                <p>
                  Fernando Brainer{" "}
                  <span className="especializacao">
                    {" "}
                    - Professor de Ed. Física
                  </span>
                </p>
              </div>
            </S.Arquivos>
          </Surgir>
        </S.Bloco>
      </S.Container>
    </>
  );
}
export default Profissionais;
