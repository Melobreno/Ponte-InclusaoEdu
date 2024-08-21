import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import * as S from "./atividade.style";
// import avatar1 from "../../Assets/Avatar 1.svg";
import lapis from "../../Assets/lapis.svg";
// import lixeira from "../../Assets/lixeira.svg";
import QuadroAtvTxt from "../../Components/atoms/QuadroaAtvTxt";
import AtividadeInput from "../../Components/atoms/AtiavidadeInput";
import check from "../../Assets/check.svg";
import Btn from "../../Components/atoms/Button";
import { useState, useEffect } from "react";
import api from "../../api";

function AtividadeProf({ inputAparece }) {
  const aparece =
    inputAparece === "quadroSemanal" ? <QuadroAtvTxt /> : <AtividadeInput />;
  const imgIcon = inputAparece === "quadroSemanal" ? check : lapis;
  const textoButao = "Postar";

  const [texto, setTexto] = useState("");
  const [messagem, setMessagem] = useState([]);
  const [data, setData] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const mostrarAtividades = async () => {
    try {
      const response = await api.get("/");
      console.log(response.data);
      setMessagem(response.data);
    } catch (error) {
      console.error(`Error ao buscar dados: ${error}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/insertItem", {
        texto,
      });
      setTexto("");
      mostrarAtividades();
      setIsFocused(false);
    } catch (error) {
      console.error(`Erro ao inserir dados: ${error}`);
    }
  };

  const handleCancela = () => {
    setTexto("");
    setIsFocused(false);
  };
  const handleFocused = () => {
    setIsFocused(true);
  };
  useEffect(() => {
    mostrarAtividades();
    handleSubmit();
    const mostrarData = new Date().toLocaleDateString();
    setData(mostrarData);
  }, []);

  const handleDelete = async (id) => {
    try {
      const resposta = await api.delete(`/deleteItem/${id}`);
      console.log(resposta);
      mostrarAtividades();
    } catch (error) {
      console.log(`Erro ao excluir dados: ${error}`);
    }
  };

  return (
    <>
      <Pesquisa />
      <S.Container>
        <SideDocumentacao />
        <S.Bloco>
          <section>
            <form onSubmit={handleSubmit}>
              <div className="inputEstilizando">
                <input
                  className={`digite ${isFocused ? "ampliado" : ""}`}
                  type="text"
                  placeholder="Digite aqui sua proposta de atividade semanal..."
                  value={texto}
                  onFocus={handleFocused}
                  onChange={(event) => setTexto(event.target.value)}
                />
                {isFocused && (
                  <div className="botoes">
                    <Btn type="submit" txt={textoButao} />
                    <button
                      type="button"
                      onClick={handleCancela}
                      className="butaoSecudario"
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
            </form>

            <S.menssagem>
              {messagem.map((useTexto) => (
                <ul key={useTexto.id}>
                  <li className="caixasTexto">
                    {useTexto.texto}{" "}
                    <div className="butoesCaixas">
                      <button onClick={() => handleDelete(useTexto.id)}>
                        Deletar
                      </button>
                      <button>Editar</button>
                    </div>
                    <p>{data}</p>
                  </li>
                </ul>
              ))}
            </S.menssagem>
          </section>
        </S.Bloco>
      </S.Container>
    </>
  );
}
export default AtividadeProf;
