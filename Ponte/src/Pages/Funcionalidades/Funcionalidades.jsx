import { Titulo, Opcoes, Fundo, Section } from './FuncionalidadesStyle';
import imgFun from '../../Assets/img/Funcionalidades.svg';
import imgMais from '../../Assets/icons/+.svg';
// import imgFundo from '../../Assets/img/EfeitosFuncion.png';

function Funcionalidades() {
  return (
    <Section>
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
                    Conexão entre pais e professores{' '}
                    <img className="imgMais" src={imgMais} alt="" />
                  </summary>

                  <p>
                    A nossa ferramenta vai permitir que a comunicação entre os
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
                    Acompanhamento contínuo{' '}
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
                    Documentação do aluno{' '}
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
    </Section>
  );
}
export default Funcionalidades;
