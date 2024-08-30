import { useState } from "react";
import img from "../../../Assets/Logo8.svg";
import voltar from "../../../Assets/voltar.svg";
import * as S from "./style";
import api from "../../../api/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ElementoEmail() {
  const navegar = useNavigate();
  const [valor, setValor] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState(false);

  async function verificaEmail() {
    if (email.length < 1) {
      setErro(true);
      alert("Insira o seu email");
      return;
    }
    try {
      const response = await api.get(`/verificaemail/${email}`);
      response.data.exists
        ? navegar("/novasenha", { state: { email_user: email } })
        : alert("O email informado não consta no nosso sistema");
    } catch (error) {
      setErro(true);
    }
  }
  return (
    <>
      <S.Container>
        <section className="mainContent">
          <div className="voltar">
            <Link to={"/login"}>
              <a href="">Voltar</a>
              <img src={voltar} alt="" />
            </Link>
          </div>
          <Link to={"/login"}>
            <img src={img} alt="" />
          </Link>
          <S.texto>
            <h1>Redefinir senha</h1>
            <p>Digite o seu e-mail para redefinir a senha.</p>
          </S.texto>
          <S.inputs>
            <label className="txtsenha">Digite seu email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </S.inputs>
          <div className="footerbtn">
            <button onClick={verificaEmail}>Continuar</button>
            {erro && (
              <p className="msgErro">
                Por favor verifique seus dados e tente novamente
              </p>
            )}
          </div>
        </section>
      </S.Container>
    </>
  );
}
export default ElementoEmail;
