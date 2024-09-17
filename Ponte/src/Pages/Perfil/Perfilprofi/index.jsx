import React, { useState } from "react";
import { Perf } from "./Perfilstyled";
import Pesquisa from "../../../Components/molecules/BarraPesquisa";
import SideDocumentacao from "../../../Components/organisms/SideBarDocument/SideDocumentacao";
import Footer from "../../../Components/molecules/Footer/Footer";
import { Link } from "react-router-dom";
import img from "../../../assets/avatar2.svg";
import { Surgir } from "../../../Components/motion";
import fb from "../../../assets/fb.svg";
import insta from "../../../assets/instagram.svg";

function Perfilprof() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const handleClick = () => {
    setIsConnected(!isConnected);
  };
  return (
    <>
      <Pesquisa setOpenSidebar={setOpenSideBar} />
      <Perf>
        <div className="side">{openSideBar && <SideDocumentacao />}</div>
        <Surgir>
          <div className="conteiner1">
            <div className="box1">
              <div>
                <img src={img} width={"100px"} alt="user" />
              </div>
              <div className="textoprof">
                <p className="nomeProf">Priscila Silva</p>
                <p className="ocupacao">Fonoaudióloga</p>
              </div>
            </div>
            <div className="conteiner2">
              <div className="botao">
                <button
                  className={`btn ${
                    isConnected ? "connected" : "not-connected"
                  }`}
                  onClick={handleClick}
                >
                  {isConnected ? "Conectado" : "Conectar"}
                </button>
                <Link to={"/chat"}>
                  <button className="btn">Mensagem</button>
                </Link>
              </div>
              <div className="box2">
                <div className="sobre">
                  <h3 className="dadosprof">Dados Profissionais</h3>
                  <p>Nome: Dra. Priscila Silva </p>
                  <p>Especialidade: Fonoaudióloga para TEA</p>
                  <p> Instituição: Clínica Criança Feliz</p>
                  <p>Telefone: (81) 99876-5432</p>
                  <p> E-mail: priscila.silva@gmail.com</p>
                  <p>
                    Endereço: Av. Dantas Barreto, 101, Sala 12, Recife - PE,
                    50020-000
                  </p>
                </div>
                <div className="box3">
                  <h3>Sobre Mim</h3>
                  <p className="sobre">
                    Priscila Silva é uma profissional fonoaudióloga
                    especializada no atendimento de crianças no espectro
                    autista. Com uma abordagem centrada na criança e um profundo
                    entendimento das particularidades do autismo, Priscila se
                    dedica a promover o desenvolvimento da comunicação e das
                    habilidades sociais em seus pacientes.
                  </p>
                  <p>Acompanhe Priscila nas redes sociais e saiba mais</p>
                  <div>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="face" src={fb} alt="fb" />
                    </a>

                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="insta" src={insta} alt="insta" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Surgir>
      </Perf>
      <Footer />
    </>
  );
}
export default Perfilprof;
