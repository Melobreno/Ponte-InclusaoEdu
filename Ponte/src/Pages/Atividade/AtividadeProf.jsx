import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import * as S from "./atividade.style";
import avatar1 from "../../Assets/Avatar 1.svg";
import lapis from "../../Assets/lapis.svg";
import lixeira from "../../Assets/lixeira.svg";
import QuadroAtvTxt from "../../Components/atoms/QuadroaAtvTxt";
import AtividadeInput from "../../Components/atoms/AtiavidadeInput";
import check from "../../Assets/check.svg";
function AtividadeProf({ inputAparece }) {
  const aparece =
    inputAparece === "quadroSemanal" ? <QuadroAtvTxt /> : <AtividadeInput />;

  const imgIcon = inputAparece === "quadroSemanal" ? check : lapis;
  return (
    <>
      <Pesquisa />
      <S.Container>
        <SideDocumentacao />
        <S.Bloco>
          {aparece}
          <div className="quadro">
            <img src={avatar1} alt="" className="avatar" />

            <div className="atividade">
              <h4>Atividade prática</h4>
              <p>Jogo das palavras: Escolha cinco brinquedos do João....</p>
            </div>
            <div className="icons">
              <img src={imgIcon} alt="" />
              <img src={lixeira} alt="" />
            </div>
          </div>
        </S.Bloco>
      </S.Container>
    </>
  );
}
export default AtividadeProf;
