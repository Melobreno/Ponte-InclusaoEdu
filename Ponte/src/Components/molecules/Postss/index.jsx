import { Texto, Escreva, Mensagem, Mensagem2 } from "./styles";
import img from "../../../Assets/Avatar 1.svg";
import img2 from "../../../Assets/avatar2.svg";

// import vetor from "../../Assets/vetorPreto.png";
import balao from "../../../Assets/comentario.svg";
import Btn from "../../atoms/Button/index";

function Posts() {
  //   const [texto, setTexto] = useState("");
  //   const [mensagens, setMensagem] = useState([]);

  //   useEffect(() => {
  //     fetchMensagens();
  //   }, []);

  //   const fetchMensagens = async () => {
  //     try {
  //       const response = await api.get("");
  //       setMensagem(response.data);
  //     } catch (error) {
  //       console.error(`Erro ao buscar dados: ${error}`);
  //     }
  //   };
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       await api.post("/insertItem", {
  //         texto,
  //       });
  //       fetchMensagens();
  //       setTexto("");
  //     } catch (error) {
  //       console.error(`Error ao inserir dados: ${error}`);
  //     }
  //   };
  const value = "Enviar";
  return (
    <>
      <Texto>
        <div>
          <Escreva>
            <div className="novaMsg">
              <img className="img" src={img} alt="" />
              <textarea
                name="digiteMsg"
                id=""
                placeholder="Digite uma nova mensagem..."
              ></textarea>
            </div>
            <hr />
            <div className="botao">
              <Btn txt={value} />
            </div>
          </Escreva>
          <Mensagem>
            <div className="enviado">
              <img className="img" src={img} alt="" />
              <div className="texto">
                <h1>Lucas Melo</h1>
                <p>
                  Desenvolvimento: Estou super orgulhosa! Desde que vocês
                  começaram a acompanhar mais de perto o desenvolvimento escolar
                  do meu filho, ele tem feito progressos incríveis.
                </p>
                <div className="comentario">
                  <p className="data">07 - Agosto - 2024</p>
                  <img className="balao" src={balao} alt="" />
                </div>
              </div>
            </div>
          </Mensagem>
          <Mensagem2>
            <div className="enviado">
              <img className="img" src={img2} alt="" />
              <div className="texto">
                <h1>Priscila Silva</h1>
                <p>
                  Jornada: Muito feliz em ver como o João está se desenvolvendo
                  e aprendendo tanto! Vamos continuar apoiando e incentivando
                  cada passo dessa jornada. 🚀❤️
                </p>
                <div className="comentario">
                  <p className="data">07 - Agosto - 2024</p>
                  <img className="balao" src={balao} alt="" />
                </div>
              </div>
            </div>
          </Mensagem2>
        </div>
      </Texto>
    </>
  );
}
export default Posts;
