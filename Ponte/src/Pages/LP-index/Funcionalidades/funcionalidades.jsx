import { GlobalStyles } from "../../../MainStyles";
import { Section, Container } from "./funcionalidadesStyle";
import conexao from "../../../Assets/conexao 1.svg";
import doc from "../../../Assets/doc.svg";
import pessoas from "../../../Assets/pessoas.svg";
import acompanamento from "../../../Assets/acompanhamento.svg";

function Funcionalidades() {
  return (
    <>
      <GlobalStyles />
      <Section>
        <div className="titulo">
          <h1>Funcionalidades</h1>
        </div>

        <Container>
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
          <div className="bloco">
            <div className="texto">
              <div className="imagem">
                <img src={pessoas} />
              </div>

              <h2>Conexão entre pais e profissionais</h2>
              <p>
                A nossa ferramenta vai permitir que a comunicação entre os
                profissionais e os responsáveis aconteça de forma organizada e
                simplificada.
              </p>
            </div>
          </div>
          <div className="bloco">
            <div className="texto">
              <div className="imagem">
                <img src={acompanamento} />
              </div>
              <h2>Acompanhamento contínuo</h2>
              <p>
                A ponte vai fazer com que a sua criança receba um acompanhamento
                continuado e personalizado
              </p>
            </div>
          </div>
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
        </Container>
      </Section>
    </>
  );
}
export default Funcionalidades;
