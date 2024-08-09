import { GlobalStyles } from "../../MainStyles";
import {
  Imagem,
  Section,
  Texto,
  Escreva,
  Mensagem,
  Mensagem2,
  Atores,
} from "./styles";
import img from "../../Assets/Avatar 1.svg";
import img2 from "../../Assets/avatar2.svg";
import img3 from "../../Assets/avatar3.svg";
// import vetor from "../../Assets/vetorPreto.png";
import balao from "../../Assets/comentario.svg";
import Btn from "../../Components/atoms/Button/index";
import Pesquisa from "../../Components/molecules/BarraPesquisa";
function Feed() {
  const value = "Enviar";
  return (
    <>
      <GlobalStyles />
      <Pesquisa />
      <Imagem>
        <Section>
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
                      começaram a acompanhar mais de perto o desenvolvimento
                      escolar do meu filho, ele tem feito progressos incríveis.
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
                      Jornada: Muito feliz em ver como o João está se
                      desenvolvendo e aprendendo tanto! Vamos continuar apoiando
                      e incentivando cada passo dessa jornada. 🚀❤️
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

          <hr className="linhaL" />

          <Atores>
            <div className="atores">
              <img className="img" src={img} alt="" />

              <div className="texto">
                <h2>Lucas Melo</h2>
                <p>Você</p>
              </div>
            </div>

            <div className="atores">
              <img className="img" src={img2} alt="" />
              <div className="texto">
                <h2>Priscila Silva</h2>
                <p>Fonoaudiologa</p>
              </div>
            </div>

            <div className="atores">
              <img className="img" src={img3} alt="" />
              <div className="texto">
                <h2>Erick Oliveira</h2>
                <p>Terapeuta</p>
              </div>
            </div>

            {/* <div className="vetor">
            <img className="vetorPreto" src={vetor} alt="" />
          </div> */}
          </Atores>
        </Section>
      </Imagem>
    </>
  );
}

export default Feed;
