import * as S from "./documentacao.style";
import SaidDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
function Documentacao() {
  return (
    <>
      <Pesquisa />
      <S.Container>
        <SaidDocumentacao />
        <S.Bloco>
          <S.Arquivos1>
            <div>
              <p>Documento adicionado</p>
            </div>
            <div>
              <p>Profissional, adicione o documento do pacienete aqui</p>
            </div>
          </S.Arquivos1>
          <S.Text>
            <h3>Documentos recentes</h3>
            <S.Arquivos>
              <div>
                <p> documento.pdf 13:14h</p>
              </div>
              <div>
                <p> documento.pdf 13:14h</p>
              </div>
              <div>
                <p> documento.pdf 13:14h</p>
              </div>
            </S.Arquivos>
          </S.Text>
        </S.Bloco>
      </S.Container>
    </>
  );
}
export default Documentacao;
