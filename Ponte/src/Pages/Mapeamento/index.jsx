import { Map, Foto1, Foto2 } from "./mapStyled";
import fotom from "../../Assets/Usermulher.svg";
import fotoh from "../../Assets/Userhomem.svg";
import Button from "../../Components/atoms/Button/index";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import { useState } from "react";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";

function Mapeamento() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const value = "Buscar";
  return (
    <>
      <Pesquisa setOpenSideBar={setOpenSideBar} />
      <div>{openSideBar && <SideDocumentacao />}</div>
      <Map>
        <div className="card">
          <div className="busca">
            Encontramos estes resultados para sua busca:
          </div>

          <div className="container2">
            <div className="info1">
              <Foto1>
                <img src={fotom} alt="user" />
              </Foto1>
              <div className="dados">
                <div className="nome">Erick Oliveira</div>
                <div className="ocupacao">Fonoaudiologa</div>
              </div>
            </div>
            <div className="info2">
              <div className="endereco">
                Rua Ipojuca, 537 Areias, Recife, PE 50780650
              </div>
              <div className="status">Disponivel para teleconsulta</div>
              <div className="atendimento">Atendimento Particular</div>
            </div>
          </div>
          <div className="container3">
            <div className="info1">
              <Foto2>
                <img src={fotoh} alt="user" />
              </Foto2>
              <div className="dados">
                <div className="nome">Pricilla Silva</div>
                <div className="ocupacao">Terapeuta</div>
              </div>
            </div>
            <div className="info2">
              <div className="endereco">
                Av. Liberdade, 425, Tejipio, Recife, PE, 50984210
              </div>
              <div className="status">Disponivel para teleconsulta</div>
              <div className="atendimento">Atendimento Particular</div>
            </div>
          </div>
        </div>

        <div className="container1">
          <h3 className="texto">Especialização:</h3>
          <div className="input">
            <input type="checkbox" name="" id="" />
            <span>Fonoaudiologia</span>
          </div>
          <div className="input">
            <input type="checkbox" name="" id="" />
            <span>Terapeuta</span>
          </div>
          <div className="input">
            <input type="checkbox" name="" id="" />
            <span>Psicomotricista</span>
          </div>

          <h3 className="texto">Distância:</h3>
          <div className="input">
            <input type="checkbox" name="" id="" />
            <span>5 km</span>
          </div>
          <div className="input">
            <input type="checkbox" name="" id="" />
            <span>10 km</span>
          </div>
          <div className="input">
            <input type="checkbox" name="" id="" />
            <span>15 km</span>
          </div>
          <div className="button">
            <Button txt={value} />
          </div>
        </div>
      </Map>
    </>
  );
}

export default Mapeamento;
