import { Section, Container } from "./funcionalidadesStyle";
import conexao from "../../../assets/conexao 1.svg";
import doc from "../../../assets/doc.svg";
import pessoas from "../../../assets/pessoas.svg";
import acompanamento from "../../../assets/acompanhamento.svg";
import { Hover } from "../../../Components/motion";

function Funcionalidades() {
  return (
    <>
      <Section>
        <Container>
          <div className="titulo" id="funcionalidade">
            <h1>Funcionalidades</h1>
          </div>

          <div className="container">
            <Hover>
              <div className="bloco">
                <div className="texto">
                  <div className="imagem">
                    <img src={conexao} />
                  </div>

                  <h2>Mapeamento de profissionais</h2>
                  <p>
                    Forneceremos um mapeamento de todos os profissionais e
                    instituições de ensino que utilizam nossa ferramenta.
                  </p>
                </div>
              </div>
            </Hover>
            <Hover>
              <div className="bloco">
                <div className="texto">
                  <div className="imagem">
                    <img src={pessoas} />
                  </div>

                  <h2>Conexão entre pais e profissionais</h2>
                  <p>
                    A nossa ferramenta vai permitir que a comunicação entre os
                    profissionais e os responsáveis aconteça de forma organizada
                    e simplificada.
                  </p>
                </div>
              </div>
            </Hover>
            <Hover>
              <div className="bloco">
                <div className="texto">
                  <div className="imagem">
                    <img src={acompanamento} />
                  </div>
                  <h2>Acompanhamento contínuo</h2>
                  <p>
                    A ponte vai fazer com que a sua criança receba um
                    acompanhamento continuado e personalizado
                  </p>
                </div>
              </div>
            </Hover>
            <Hover>
              <div className="bloco">
                <div className="texto">
                  <div className="imagem">
                    <img src={doc} />
                  </div>

                  <h2>Documentação do aluno</h2>
                  <p>
                    Todo o desenvolvimento e progresso realizado da sua criança
                    ficará salvo e disponível como arquivo PDF.
                  </p>
                </div>
              </div>
            </Hover>
          </div>
        </Container>
      </Section>
    </>
  );
}
export default Funcionalidades;
