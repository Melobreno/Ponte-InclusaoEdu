import React, { useState } from "react";
import { Map, Foto1 } from "./mapStyled";
import fotom from "../../Assets/Usermulher.svg";
import fotoh from "../../Assets/Userhomem.svg";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import api from "../../api/api";

function Mapeamento() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [resultados, setResultados] = useState([]);

  const [selectedCities, setSelectedCities] = useState([]);

  const handleSearch = async () => {
    console.log("handsearch");
    if (selectedCities.length === 0) {
      alert("Por favor, selecione ao menos uma cidade.");
      return;
    }
    if (selectedCities.length > 1) {
      alert("Você pode selecionar apenas uma cidade.");
      return;
    }

    try {
      const citiesQuery = selectedCities.join(",");

      console.log("Realizando busca com:", {
        cidade: citiesQuery,
      });

      const response = await api.get(`/showcep/${citiesQuery}`);

      console.log("Resposta da API:", response.data);

      setResultados(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setResultados([]);
    }
  };

  return (
    <>
      <Pesquisa setOpenSidebar={setOpenSideBar} />
      <Map>
        <div className="side">{openSideBar && <SideDocumentacao />}</div>
        <div className="content">
          <div className="card">
            <div className="busca">
              Faça aqui o mapeamento de profissionais disponiveis para a sua
              cidade.
            </div>
            {resultados.length > 0 ? (
              resultados.map((dado) => (
                <div className="container2" key={dado["id-prof"]}>
                  <div className="info1">
                    {console.log(dado.sexo)}
                    <Foto1>
                      <img
                        src={
                          dado.sexo === "masculino"
                            ? fotom
                            : dado.sexo === "feminino"
                            ? fotoh
                            : ""
                        }
                        alt="user"
                      />
                    </Foto1>

                    <div className="dados">
                      <div className="nome">{dado["name_prof"]}</div>
                      <div className="ocupacao">{dado.ocupacao}</div>
                    </div>
                  </div>
                  <div className="info2">
                    <div className="endereco">{dado.cidade}</div>
                    <div className="status">Disponível para teleconsulta</div>
                    <div className="atendimento">Atendimento particular</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="container3">
                <p>
                  Selecione uma cidade e clique em buscar para obter
                  informações:
                </p>
              </div>
            )}
          </div>

          <div className="container1">
            <h3 className="texto">Selecione uma cidade:</h3>
            <div className="input">
              <input
                type="checkbox"
                value="Recife"
                checked={selectedCities.includes("Recife")}
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectedCities((prev) =>
                    e.target.checked
                      ? [...prev, value]
                      : prev.filter((cidade) => cidade !== value)
                  );
                }}
                id="RECIFE"
              />
              <span>Recife</span>
            </div>
            <div className="input">
              <input
                type="checkbox"
                value="Paudalho"
                checked={selectedCities.includes("Paudalho")}
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectedCities((prev) =>
                    e.target.checked
                      ? [...prev, value]
                      : prev.filter((cidade) => cidade !== value)
                  );
                }}
                id="PAUDALHO"
              />
              <span>Paudalho</span>
            </div>
            <div className="input">
              <input
                type="checkbox"
                value="Jaboatão"
                checked={selectedCities.includes("Jaboatão")}
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectedCities((prev) =>
                    e.target.checked
                      ? [...prev, value]
                      : prev.filter((cidade) => cidade !== value)
                  );
                }}
                id="JABOATAO"
              />
              <span>Jaboatão Dos Guararapes</span>
            </div>
            <div className="button">
              <button className="botao" onClick={handleSearch}>
                Buscar
              </button>
            </div>
          </div>
        </div>
      </Map>
    </>
  );
}

export default Mapeamento;
