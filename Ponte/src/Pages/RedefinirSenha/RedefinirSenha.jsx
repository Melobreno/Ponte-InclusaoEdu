import * as S from "./redefinir.Style";
import   img from '../../Assets/Vetor.svg'

function RedifiniSenha() {
  return (
    <S.Body>
      <S.Container>
      
        <S.Circulo>
            
            <S.containerSenha>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                <h2>Redefinir senha</h2>
                <p> Digite o seu e-mail no campo abaixo e lhe enviaremos um código de
                ativação para redefinição de senha.</p>
                <S.textBut>
               <p className="textEmail">Digite seu e-mail</p>
        
                <input type="text" placeholder="exemplo@exemplo" />
                <button>Enviar</button>
                </S.textBut>
                </div>
            </S.containerSenha>
        </S.Circulo>
   
      </S.Container>
    </S.Body>
  );
}
export default RedifiniSenha;
