import Pesquisa from "../../Components/molecules/BarraPesquisa";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import * as S from "./atividade.style";
import api from "../../api/api";
import { useState, useEffect } from "react";
function AtividadeResp() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [menssagem, setMenssagem] = useState([]);

  useEffect(() => {
    mostrarAtividade();
  }, []);
  const mostrarAtividade = async () => {
    try {
      const resposta = await api.get("/atividadeRes");
      setMenssagem(resposta.data);
      console.log(resposta.data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };
  return (
    <>
      <Pesquisa setOpenSidebar={setOpenSidebar} />
      <S.Container>
        {openSidebar && <SideDocumentacao />}
        <S.Bloco>
          <S.menssagem>
            {menssagem.map((useTexto) => (
              <ul key={useTexto.id_ativi}>
                <li className="caixasTexto">{useTexto.texto}</li>
                <div className="butoesCaixas"></div>
              </ul>
            ))}
          </S.menssagem>
        </S.Bloco>
      </S.Container>
    </>
  );
}

export default AtividadeResp;
