import * as S from "./sobreNosStyled";
import img from "../../assets/freepik-export-20240707214031vcp1 2.png";
function SobreNos() {
  return (
    <>
      <S.Titulo>
        <p></p>
        <h1>Sobre nós</h1>
      </S.Titulo>

      <S.Container>
        <div>
          <div>
            <p>
              Nós da Ponte, somos uma plataforma que transforma o
              desenvolvimento de crianças neuroatípicas.
            </p>
          </div>
          <div>
            <p>
              Trabalhamos com a integração de informações entre responsáveis e
              profissionais que acompanham a criança no seu desenvolvimento.
            </p>
          </div>
          <div>
            <p>
              Damos a ferramenta necessária para que ainformação seja levada com
              simplicidade e segurança.
            </p>
          </div>
        </div>
        <div>
          <img src={img} alt="Crinça com as mãos levantadas" />
        </div>
      </S.Container>
    </>
  );
}
export default SobreNos;
