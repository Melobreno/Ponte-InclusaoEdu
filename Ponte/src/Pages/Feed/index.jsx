import { GlobalStyles } from "../../MainStyles";
import { Pagina, Imagem, Section, Texto, Atores } from "./styles";
import img from "../../Assets/Avatar 1.svg";
import img2 from "../../Assets/avatar2.svg";
import img3 from "../../Assets/avatar3.svg";

import Pesquisa from "../../Components/molecules/BarraPesquisa";
import Posts from "./posts";
function Feed() {
  const value = "Enviar";
  return (
    <>
      <Pagina>
        <GlobalStyles />
        <Pesquisa />

        <Section>
          <Texto>
            <div className="posts">
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
            <Imagem>
              <div className="imagemFundo"></div>
            </Imagem>
          </Atores>
        </Section>
      </Pagina>
    </>
  );
}

export default Feed;
