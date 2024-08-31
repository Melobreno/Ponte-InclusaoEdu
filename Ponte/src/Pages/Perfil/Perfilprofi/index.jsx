import React, { useState } from "react";
import { Perf, Foto1, Foto2 } from "./Perfilstyled";
import Pesquisa from "../../../Components/molecules/BarraPesquisa";
import SideDocumentacao from "../../../Components/organisms/SideBarDocument/SideDocumentacao";
import Footer from "../../../Components/molecules/Footer/Footer";

function Perfilprof() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <>
      <Pesquisa setOpenSidebar={setOpenSideBar} />
      <Perf>
        <div className="side">{openSideBar && <SideDocumentacao />}</div>
        <div className="conteiner1">
          <div className="box1">
            <Foto1>
              <img src="./src/assets/usermulher.svg" alt="user" />
            </Foto1>
            <div className="textoprof">
              <p>Carlos Silva</p>
              <p>Terapeuta</p>
            </div>
          </div>
          <button className="adicionar">conectar</button>
          <div className="box2">
            <p>Nome: Dr. Carlos Silva </p>
            <p>Especialidade: Terapia Ocupacional para TEA</p>
            <p> Instituição: Clínica Criança Feliz</p>
            <p>Telefone: (81) 99876-5432</p>
            <p> E-mail: carlos.silva@gmail.com</p>
            Endereço: Av. Dantas Barreto, 101, Sala 12, Recife - PE, 50020-000
          </div>
          <div className="box3">
            <Foto2>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="face" src="./src/assets/fb.svg" alt="fb" />
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="x" src="./src/assets/x.svg" alt="x" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="insta"
                  src="./src/assets/instagram.svg"
                  alt="insta"
                />
              </a>
            </Foto2>
          </div>
        </div>
      </Perf>
      <Footer />
    </>
  );
}
export default Perfilprof;
