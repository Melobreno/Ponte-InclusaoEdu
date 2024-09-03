import Pesquisa from "../../Components/molecules/BarraPesquisa";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import avata from "../../Assets/Avatar 1.svg";
import * as S from "./atividade.style";
import api from "../../api/api";
import { useState, useEffect } from "react";
import { Surgir } from "../../Components/motion";

function AtividadeResp() {
  const [menssagem, setMenssagem] = useState([]);
  const [dataCriacao, setDataCriacao] = useState("");

  useEffect(() => {
    mostrarAtividade();
  }, []);

  useEffect(() => {
    if (!dataCriacao) {
      const data = new Date().toLocaleDateString();
      setDataCriacao(data);
    }
  }, [dataCriacao]);
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
      <Pesquisa />
      <S.Container>
        <SideDocumentacao />
        <S.Bloco>
          <S.menssagem>
            <Surgir>
              <h2>Atividades</h2>
              {menssagem.map((useTexto) => (
                <ul key={useTexto.id_ativi}>
                  <p className="avatar">
                    <img src={avata} alt="avata" />
                    <h4>Lucas Melo</h4>
                  </p>
                  <li className="caixasTexto">
                    {useTexto.texto} <p>{dataCriacao}</p>
                  </li>
                  <div className="botoesCaixas"></div>
                </ul>
              ))}
            </Surgir>
          </S.menssagem>
        </S.Bloco>
      </S.Container>
    </>
  );
}

export default AtividadeResp;
