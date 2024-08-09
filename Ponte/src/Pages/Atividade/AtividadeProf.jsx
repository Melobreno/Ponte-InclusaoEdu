import SaidDocumentacao from "../../Components/organisms/SaidBarDocument/SaidDocumentacao";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import * as S from "./atividade.style";
function AtividadeProf() {
  return (
    <>
      <Pesquisa />
      <S.Container>
        <SaidDocumentacao />
        <S.Bloco>
          <h1>Digite aqui sua proposta de atividade semanal...</h1>
          <div>
            <h4>Atividade prática</h4>
            <p>Jogo das palavras: Escolha cinco brinquedos do João....</p>
          </div>
        </S.Bloco>
      </S.Container>
    </>
  );
}
export default AtividadeProf;
