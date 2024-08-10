import * as S from "./documentacao.style";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import fav from "../../Assets/PicFav.svg";
import pDF from "../../Assets/PicPDF.svg";
import nDoc from "../../Assets/newDoc.svg";
function Documentacao() {
  return (
    <>
      <Pesquisa />
      <S.Container>
        <SideDocumentacao />
        <S.Bloco>
          <div className="tituloh2">
            <h2>Documentos da Criança</h2>
          </div>
          <S.Arquivos>
            <div className="containerFunc">
              <span>
                <img src={nDoc} alt="" />
              </span>
              <p>Adicionar um novo Documento</p>
            </div>
            <div className="containerFunc">
              <span>
                <img src={pDF} alt="" />
              </span>
              <p>Visualizar Todos os Documentos</p>
            </div>
            <div className="containerFunc">
              <span>
                <img src={fav} alt="" />
              </span>
              <p>Visualizar Documentos Favoritos</p>
            </div>
          </S.Arquivos>
          <div>
            <div className="tituloh2">
              <h2>Documentos recentes</h2>
            </div>
            <S.Arquivos1>
              <div className="containerArquivos">
                <p>
                  documento.pdf <span>13:14h</span>
                </p>
              </div>
              <div className="containerArquivos">
                <p>
                  documento.pdf <span>13:14h</span>
                </p>
              </div>
              <div className="containerArquivos">
                <p>
                  documento.pdf <span>13:14h</span>
                </p>
              </div>
            </S.Arquivos1>
          </div>
        </S.Bloco>
      </S.Container>
    </>
  );
}
export default Documentacao;
