import { Escreva, Mensagem } from "./styles";
import img from "../../Assets/Avatar 1.svg";
import lixeira from "../../Assets/lixeira.svg";
import balao from "../../Assets/comentario.svg";
import Btn from "../../Components/atoms/Button/index";
import { useState, useEffect } from "react";
import api from "../../api/api";

function Posts() {
  const [texto, setTexto] = useState("");
  const [mensagens, setMensagens] = useState([]);

  const fetchMensagens = async () => {
    try {
      const response = await api.get("/showmsg");
      const msgOrdem = response.data.sort(
        (dataA, dataB) => new Date(dataB.data) - new Date(dataA.data)
      );
      setMensagens(msgOrdem);
    } catch (error) {
      console.error(`Erro ao buscar dados: ${error}`);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/insertmsg", {
        texto: texto,
      });
      fetchMensagens();
      setTexto("");
    } catch (error) {
      console.error(`Erro ao inserir dados: ${error}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/deletemsg/${id}`);
      fetchMensagens();
    } catch (error) {
      console.error(`Erro ao deletar a mensagem: `, error);
    }
  };
  useEffect(() => {
    fetchMensagens();
  }, []);
  const enviar = "Enviar";
  return (
    <>
      <div>
        <h1>Teste</h1>
        <Escreva>
          <form onSubmit={handleSubmit}>
            <div className="novaMsg">
              <img className="img" src={img} alt="" />
              <textarea
                type="text"
                value={texto}
                onChange={(event) => {
                  setTexto(event.target.value);
                }}
                placeholder="Digite uma nova mensagem..."
              ></textarea>
            </div>
            <hr />
            <div className="botao">
              <Btn type="submit" txt={enviar} />
            </div>
          </form>
        </Escreva>
        <div>
          {mensagens.map((mensagem) => (
            <Mensagem key={mensagem.id}>
              <div className="enviado">
                <img className="img" src={img} alt="" />

                <div className="texto">
                  <h1>Lucas Melo</h1>
                  <div className="conteudo">
                    <p>{mensagem.texto}</p>
                  </div>

                  <div className="comentario">
                    <p className="data">
                      {new Date(mensagem.data).toLocaleDateString()}
                    </p>
                    <img className="balao" src={balao} alt="" />
                    <button
                      className="lixeira"
                      onClick={() => handleDelete(mensagem.id)}
                    >
                      <img src={lixeira} alt="Ícone de lixeira" />
                    </button>
                  </div>
                </div>
              </div>
            </Mensagem>
          ))}
        </div>
      </div>
    </>
  );
}
export default Posts;
