import * as S from "../CodigoAtivacao/codigoAtivacao.style";
import img from "../../../Assets/Vetor.svg";

function CodigoAtivacao() {
  return (
    <S.Body>
      <S.Container>
        <S.Circulo>
          <S.ContainerCodigo>
            <S.TextImg>
            <div>
              <img src={img} alt="" />
            </div>
            <S.Text>
                <h1>Redefinir</h1>
                <p>
                Por favor, insira no campo abaixo o código de ativação que você recebeu por e-mal e redefina sua senha.
                </p>
                <input type="text" />
                <button>Entrar</button>
            </S.Text>
            </S.TextImg>
          </S.ContainerCodigo>
        </S.Circulo>
      </S.Container>
    </S.Body>
  );
}
export default CodigoAtivacao;
