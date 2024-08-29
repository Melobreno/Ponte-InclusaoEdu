import { useState } from "react";
import img from "../../../Assets/Logo8.svg";
import voltar from "../../../Assets/voltar.svg";
import Btn from "../../atoms/Button/index/";
import * as S from "./style";
import api from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";

function ElementoEmail() {
  const navegar = useNavigate();
  const [valor, setValor] = useState("");
  const [email, setEmail] = useState("");

  async function verificaEmail() {
    if (email.length < 1) {
      alert("Insira o seu email");
      return;
    }
    try {
      const response = await api.get(`/verificaemail/${email}`);
      response.data.exists
        ? navegar("/novasenha", { state: { email_user: email } })
        : alert("O email informado não consta no nosso sistema");
    } catch (error) {
      console.log("Erro ao verificar a existencia do email");
    }
  }
  return (
    <>
      <S.Container>
        <div className="voltar">
          <Link to={"/login"}>
            <a href="">Voltar</a>
            <img src={voltar} alt="" />
          </Link>
        </div>
        <img src={img} alt="" />
        <S.texto>
          <h1>Redefinir senha</h1>
          <p>Digite o seu e-mail para redefinir a senha.</p>
        </S.texto>
        <S.inputs>
          <input
            type="email"
            placeholder={"Seu Email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </S.inputs>
        <button onClick={verificaEmail}>Continuar</button>
      </S.Container>
      <p>{setValor}</p>
    </>
  );
}
export default ElementoEmail;
