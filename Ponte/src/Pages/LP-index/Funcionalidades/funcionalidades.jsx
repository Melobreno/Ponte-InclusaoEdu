import { Titulo, Opcoes, Fundo } from "./funcionalidadesStyle";
import imgFun from "../../../Assets/Funcionalidades.png";
import imgMais from "../../../Assets/+.svg";

function Funcionalidades() {
  return (
    <section id="funcionalidade">
      <Fundo>
        <Titulo>
          <h1>FUNCIONALIDADES</h1>
        </Titulo>
        <Opcoes>
          <img src={imgFun} alt="Img Funcionalidades" />
          <div>
            <ul>
              <li>
                <details>
                  <summary>
                    Conexão entre pais e professores{" "}
                    <img className="imgMais" src={imgMais} alt="" />
                  </summary>

                  <p>
                    A nossa ferramenta permite que a comunicação entre os
                    profissionais e os responsáveis aconteça de forma organizada
                    e simplicifada.
                  </p>
                </details>
              </li>

              <li>
                <details>
                  <summary>
                    Mapeamento de profissionais
                    <img className="imgMais" src={imgMais} alt="" />
                  </summary>
                  <p>
                    Forneceremos um mapeamento de todos os profissionais e
                    instituições de ensino que utilizam nossa ferramenta.
                  </p>
                </details>
              </li>

              <li>
                <details>
                  <summary>
                    Acompanhamento contínuo{" "}
                    <img className="imgMais" src={imgMais} alt="" />
                  </summary>
                  <p>
                    A ponte vai fazer com que a sua criança receba um
                    acompanhamento continuado e personalizado
                  </p>
                </details>
              </li>

              <li>
                <details>
                  <summary>
                    Documentação do aluno{" "}
                    <img className="imgMais" src={imgMais} alt="" />
                  </summary>
                  <p>
                    Todo o desenvolvimento e progresso realizado da sua criança
                    ficará salvo e disponível como arquivo PDF.
                  </p>
                </details>
              </li>
            </ul>
          </div>
        </Opcoes>
      </Fundo>
    </section>
  );
}
export default Funcionalidades;
