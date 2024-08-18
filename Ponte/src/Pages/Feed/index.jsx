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
import Posts from "./posts";
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
              <Posts />
            </div>
          </Texto>

          <hr className="linhaL" />

          <Atores>
            <div className="atores">
              <img className="img" src={img} alt="" />

              <div className="texto">
                <h2>Lucas Melo</h2>
                <p>Responsável por (Criança)</p>
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
