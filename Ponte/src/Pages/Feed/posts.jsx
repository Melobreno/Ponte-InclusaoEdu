import { Escreva, Mensagem } from "./styles";
import img from "../../Assets/Avatar 1.svg";
// import img2 from "../../Assets/avatar2.svg";
import lixeira from "../../Assets/lixeira.svg";

import balao from "../../Assets/comentario.svg";
import Btn from "../../Components/atoms/Button/index";
import { useState, useEffect } from "react";
import api from "../../api";

function Posts() {
  const [texto, setTexto] = useState("");
  const [mensagens, setMensagem] = useState([]);

  useEffect(() => {
    fetchMensagens();
  }, []);

  const fetchMensagens = async () => {
    try {
      const response = await api.get("");
      const msgOrdem = response.data.sort(
        (dataA, dataB) => new Date(dataB.data) - new Date(dataA.data)
      );
      setMensagem(msgOrdem);
    } catch (error) {
      console.error(`Erro ao buscar dados: ${error}`);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/insertItem", {
        texto,
      });
      fetchMensagens();
      setTexto("");
    } catch (error) {
      console.error(`Erro ao inserir dados: ${error}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/deleteItem/${id}`);
      fetchMensagens();
    } catch (error) {
      console.error(`Erro ao deletar a mensagem: `, error);
    }
  };

  const enviar = "Enviar";
  return (
    <>
      <div>
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
                      <img src={lixeira} />
                    </button>
                  </div>
                </div>
              </div>
            </Mensagem>
          ))}
        </div>

        {/* <Mensagem2>
          <div className="enviado">
            <img className="img" src={img2} alt="" />
            <div className="texto">
              <h1>Priscila Silva</h1>
              <p>
                Jornada: Muito feliz em ver como o João está se desenvolvendo e
                aprendendo tanto! Vamos continuar apoiando e incentivando cada
                passo dessa jornada. 🚀❤️
              </p>
              <div className="comentario">
                <p className="data">07 - Agosto - 2024</p>
                <img className="balao" src={balao} alt="" />
                <button className="lixeira">
                  <img src={lixeira} alt="" />
                </button>
              </div>
            </div>
          </div>
        </Mensagem2> */}
      </div>
    </>
  );
}
export default Posts;
