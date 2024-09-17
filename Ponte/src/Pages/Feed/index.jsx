import { Pagina, Section, Texto, Atores } from "./styles";
import img from "../../assets/Avatar 1.svg";
import img2 from "../../assets/avatar2.svg";
import img3 from "../../assets/avatar3.svg";
import Pesquisa from "../../Components/molecules/BarraPesquisa";
import Posts from "./posts";
import { useEffect, useState } from "react";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import { Link } from "react-router-dom";
import TelaCarregamento from "../../Components/atoms/telaCarregamento/TelaCarregamneto";
import { Surgir } from "../../Components/motion";

function Feed() {
  const [carregando, setCarregando] = useState(true);
  const nomeUsuario = localStorage.getItem("usuario");
  const tipoConta = localStorage.getItem("conta");
  useEffect(() => {
    setTimeout(() => {
      setCarregando(false);
    }, 1000);
  }, []);
  if (carregando) {
    return <TelaCarregamento />;
  }
  return (
    <>
      <Pesquisa />
      <Pagina>
        <SideDocumentacao />
        <Section>
          <Texto>
            <Surgir>
              <div className="posts">
                <Posts />
              </div>
            </Surgir>
          </Texto>
          <hr className="linhaL" />
          <Atores>
            <Surgir>
              <div className="atores">
                <img className="img" src={img} alt="" />
                <div className="texto">
                  <h2>{nomeUsuario}</h2>
                  <p>{tipoConta}</p>
                </div>
              </div>
              <div className="atores">
                <img className="img" src={img2} alt="" />
                <div className="texto">
                  <Link to={"/perfilprof"}>
                    <h2>Priscila Silva</h2>
                  </Link>
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
            </Surgir>
          </Atores>
        </Section>
      </Pagina>
    </>
  );
}

export default Feed;
