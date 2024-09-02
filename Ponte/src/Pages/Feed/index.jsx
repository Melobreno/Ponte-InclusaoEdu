import { Pagina, Section, Texto, Atores } from "./styles";
import img from "../../Assets/Avatar 1.svg";
import img2 from "../../Assets/avatar2.svg";
import img3 from "../../Assets/avatar3.svg";
import Pesquisa from "../../Components/molecules/BarraPesquisa";
import Posts from "./posts";
import { useEffect, useState } from "react";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import { Link } from "react-router-dom";
import TelaCarregamento from "../../Components/atoms/telaCarregamento/TelaCarregamneto";

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
            <div className="posts">
              <Posts />
            </div>
          </Texto>
          <hr className="linhaL" />
          <Atores>
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
          </Atores>
        </Section>
      </Pagina>
    </>
  );
}

export default Feed;
