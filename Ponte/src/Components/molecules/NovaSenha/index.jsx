import { useState } from "react";
import img from "../../../Assets/Logo8.svg";
import * as S from "./elementoSenha.style";
import api from "../../../api/api";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
function ElementoSenha() {
  const navegar = useNavigate();
  const [erro, setErro] = useState(false);
  const [valor, setValor] = useState("");
  const [senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");
  const sUserEmail = useLocation().state?.email_user;

  async function trocaSenha() {
    if (senha.length < 1) {
      setErro(true);
      alert("Insira a sua nova senha");
      return;
    }
    if (senha === confirma) {
      try {
        const response = await api.put("/updatepass", {
          email_user: sUserEmail,
          password_user: senha,
        });
        if (response.status === 200) {
          alert("Senha atualizada com sucesso!");
          navegar("/login"); // Redirecionar para a página de login após a atualização
        } else {
          alert("Erro ao trocar a senha. Tente novamente.");
        }
      } catch (error) {
        console.error("Erro ao trocar a senha", error);
        alert("Ocorreu um erro ao atualizar a senha.");
        setErro(true);
      }
    } else {
      setErro(true);
    }
  }
  return (
    <>
      <S.Container>
        <Link to={"/login"}>
          <img src={img} alt="" />
        </Link>
        <S.texto>
          <h1>Redefinir senha</h1>
          <p>Para efetuar a troca, insira nos campos a baixo sua nova senha</p>
        </S.texto>
        <S.inputs>
          <form action="" onSubmit={trocaSenha}>
            <label className="txtsenha">Digite a Sua nova Senha.</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
            <label className="txtsenha">Digite a Sua Senha novamente.</label>
            <input
              type="password"
              value={confirma}
              onChange={(e) => {
                setConfirma(e.target.value);
              }}
            />
            <div>
              <button type="submit">Confirmar</button>
              {erro && (
                <p className="msgErro">
                  Por favor verifique seus dados e tente novamente
                </p>
              )}
            </div>
          </form>
        </S.inputs>
      </S.Container>
      <p>{setValor}</p>
    </>
  );
}
export default ElementoSenha;
