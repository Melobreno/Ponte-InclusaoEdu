import img from "../../../Assets/Group.svg";
import * as S from "./SideDocument.style";
import iconDoc from "../../../Assets/iconDoc.svg";
import iconFolder from "../../../Assets/iconFolder.svg";
import iconStar from "../../../Assets/iconStar.svg";
import iconArrrow from "../../../Assets/arrow.svg";
import iconConfig from "../../../Assets/iconConfig.svg";
import iconSair from "../../../Assets/iconSair.svg";

function SideDocumentacao() {
  return (
    <>
      <S.Container>
        <S.TextAvata>
          <img src={img} alt="" />
          <p>Lucas Melo</p>
        </S.TextAvata>
        <hr />
        <S.Texto>
          <ul>
            <li>
              <span>
                <img src={iconStar} alt="" />
              </span>
              Favoritos
            </li>
            <li>
              <span>
                <img src={iconDoc} alt="" />
              </span>
              Documentos
            </li>
            <li>
              <span>
                <img src={iconFolder} alt="" />
              </span>
              Pasta de documentos
            </li>
            <ul>
              <li>
                <span className="iconArrowOpen">
                  <img src={iconArrrow} alt="" />
                </span>
                Diagnosticos
              </li>
              <ul className="arquivos">
                <li>
                  <span>
                    <img src={iconFolder} alt="" />
                  </span>
                  Laudo 1.pdf
                </li>
                <li>
                  <span>
                    <img src={iconFolder} alt="" />
                  </span>
                  Laudo 2.pdf
                </li>
                <li>
                  <span>
                    <img src={iconFolder} alt="" />
                  </span>
                  Laudo 3.pdf
                </li>
              </ul>

              <li>
                <span className="iconArrowClosed">
                  <img src={iconArrrow} alt="" />
                </span>
                teste 2
              </li>
              <li>
                <span className="iconArrowClosed">
                  <img src={iconArrrow} alt="" />
                </span>
                teste 3
              </li>
              <li>
                <span className="iconArrowClosed">
                  <img src={iconArrrow} alt="" />
                </span>
                teste 4
              </li>
            </ul>
          </ul>

          <ul className="listOpt">
            <li>
              <span>
                <img src={iconConfig} alt="" />
              </span>
              Configurações
            </li>
            <li>
              <span>
                <img src={iconSair} alt="" />
              </span>
              Sair
            </li>
          </ul>
        </S.Texto>
      </S.Container>
    </>
  );
}
export default SideDocumentacao;
