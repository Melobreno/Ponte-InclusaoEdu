import { Pagina, Section, Texto, Atores } from "./styles";
import img from "../../Assets/Avatar 1.svg";
import img2 from "../../Assets/avatar2.svg";
import img3 from "../../Assets/avatar3.svg";
import Pesquisa from "../../Components/molecules/BarraPesquisa";
import Posts from "./posts";
import { useState } from "react";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";

function Feed() {
  return (
    <>
      <Pesquisa />
      <Pagina>
        <SideDocumentacao />
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
                <p>Responsável por Criança</p>
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
          </Atores>
        </Section>
      </Pagina>
    </>
  );
}

export default Feed;
