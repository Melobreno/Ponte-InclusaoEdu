import * as S from "./sobreNosStyled";
import maosImg from "../../assets/maosMenino.svg";

function SobreNos() {
  return (
    <>
      <S.Section>
        <S.Titulo>
          <p></p>
          <h1>Sobre nós</h1>
        </S.Titulo>

        <S.Container>
          <section>
            <div>
              <div>
                <p>
                  Nós da Ponte, somos uma plataforma que transforma o
                  desenvolvimento de crianças neuroatípicas.
                </p>
              </div>
              <div>
                <p>
                  Trabalhamos com a integração de informações entre responsáveis
                  e profissionais que acompanham a criança no seu
                  desenvolvimento.
                </p>
              </div>
              <div>
                <p>
                  Damos a ferramenta necessária para que ainformação seja levada
                  com simplicidade e segurança.
                </p>
              </div>
            </div>
          </section>
          <div className="imagemMaos">
            <img src={maosImg} alt="Crinça com as mãos levantadas" />
          </div>
        </S.Container>
      </S.Section>
    </>
  );
}
export default SobreNos;
