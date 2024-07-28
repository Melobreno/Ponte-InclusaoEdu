import { Titulo, Opcoes } from './FuncionalidadesStyle';
import imgFun from '../../Assets/img/Funcionalidades.svg';
import imgMais from '../../Assets/icons/+.svg';

function Funcionalidades() {
  return (
    <section>
      <Titulo>
        <h1>FUNCIONALIDADES</h1>
      </Titulo>

      <Opcoes>
        <img src={imgFun} alt="Img Funcionalidades" />
        <div>
          <ul>
            <li>
              <a href="">Conexão entre pais e professores</a>
              <img className="imgMais" src={imgMais} alt="" />
            </li>
            <li>
              <a href="">Mapeamento de profissionais</a>
              <img className="imgMais" src={imgMais} alt="" />
            </li>
            <li>
              <a href=""> Acompanhamento contínuo</a>
              <img className="imgMais" src={imgMais} alt="" />
            </li>
            <li>
              <a href="">Documentação do aluno</a>
              <img className="imgMais" src={imgMais} alt="" />
            </li>
          </ul>
        </div>
      </Opcoes>
    </section>
  );
}
export default Funcionalidades;
