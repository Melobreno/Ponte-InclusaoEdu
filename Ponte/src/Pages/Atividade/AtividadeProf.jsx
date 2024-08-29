import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import * as S from "./atividade.style";
import Btn from "../../Components/atoms/Button";
import avata from "../../Assets/Avatar 1.svg";
import { useState, useEffect } from "react";
import api from "../../api/api";

function AtividadeProf() {
  const textoBtn = "Postar";
  const [texto, setTexto] = useState("");
  const [messagem, setMessagem] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [editando, setEditando] = useState(null);

  // get, pega a informação que tem no banco de dados e exibe na tela
  const mostrarAtividades = async () => {
    try {
      const response = await api.get("/atividade");
      console.log(response.data);
      setMessagem(response.data);
    } catch (error) {
      console.error(`Error ao buscar dados: ${error}`);
    }
  };

  useEffect(() => {
    mostrarAtividades();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (texto === "") {
        alert("texto ivalido");
        handleEdit();
        return;
      }
      if (editando) {
        await api.put(`/atualizaAtivi/${editando}`, {
          texto,
        });
        setEditando(null);
      } else {
        await api.post("/enviarAtividade", {
          texto,
        });
      }

      // quando a pagina é renderizada ele limpa o input
      setTexto("");
      //mostra na tela depois que envia
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

  const handleDelete = async (id_ativi) => {
    try {
      const resposta = await api.delete(`/deletaratividade/${id_ativi}`);
      console.log(resposta);
      mostrarAtividades();
    } catch (error) {
      console.log(`Erro ao excluir dados: ${error}`);
    }
  };

  const handleEdit = (useTexto) => {
    setTexto(useTexto.texto);
    setEditando(useTexto.id_ativi);
    setIsFocused(true);
  };

  return (
    <>
      <Pesquisa setOpenSidebar={setOpenSidebar} />
      <S.Container>
        {openSidebar && <SideDocumentacao />}
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
                    <Btn
                      type="submit"
                      txt={editando ? "Atualizar" : textoBtn}
                    />
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
                <ul key={useTexto.id_ativi}>
                  <p className="avatar">
                    <img src={avata} alt="" />
                    <h4>Lucas Melo</h4>
                  </p>
                  <li className="caixasTexto">
                    {useTexto.texto}
                    <div className="butoesCaixas">
                      <button onClick={() => handleDelete(useTexto.id_ativi)}>
                        Deletar
                      </button>
                      <button onClick={() => handleEdit(useTexto)}>
                        Editar
                      </button>
                    </div>
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
