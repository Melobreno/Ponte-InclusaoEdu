import * as S from "./novaSenha.style";
import img from "../../../Assets/Vetor.svg";
import imgEsq from "../../../Assets/padrão 3.svg";
function NovaSenha() {
  return (
    <>
      <S.Body>
        <S.ImgElemento>
          {" "}
          <img src={imgEsq} alt="" />
        </S.ImgElemento>

        <S.Circulo />
        <S.Container>
          <div>
            <img src={img} alt="" />
          </div>
          <S.text>
            <div>
              <h1>Redefinir senha</h1>
              <p>
                Digite o seu e-mail no campo abaixo e lhe enviaremos um código
                de ativação para redefinição de senha.
              </p>
            </div>
            <S.Inputs>
              <input type="text" placeholder="Nova senha" />
              <input type="text" placeholder="Repita a nova senha" />
              <button>Enviar</button>
            </S.Inputs>
          </S.text>
        </S.Container>
      </S.Body>
    </>
  );
}
export default NovaSenha;
