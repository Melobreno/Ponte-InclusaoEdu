import { useState } from "react";
import img from "../../../Assets/Logo8.svg";
import Btn from "../../atoms/Button/index/";
import * as S from "./elementoSenha.style";
import api from "../../../api/api";
import { useLocation, useNavigate } from "react-router-dom";
function ElementoSenha() {
  const navegar = useNavigate();
  const [valor, setValor] = useState("");
  const [senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");

  const sUserEmail = useLocation().state?.email_user;

  async function trocaSenha() {
    if (senha.length < 1) {
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
          alert("cheeguei aqui");
          alert("Senha atualizada com sucesso!");
          navegar("/login"); // Redirecionar para a página de login após a atualização
        } else {
          alert("Erro ao trocar a senha. Tente novamente.");
        }
      } catch (error) {
        console.error("Erro ao trocar a senha", error);
        alert("Ocorreu um erro ao atualizar a senha.");
      }
    } else {
      console.log("To aqui");
    }
  }
  return (
    <>
      <S.Container>
        <img src={img} alt="" />
        <S.texto>
          <h1>Redefinir senha</h1>
          <p>Digite a Sua nova Senha.</p>
        </S.texto>
        <S.inputs>
          <form action="" onSubmit={trocaSenha}>
            <input
              type="password"
              placeholder={"Digite sua senha"}
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder={"Repita sua senha"}
              value={confirma}
              onChange={(e) => {
                setConfirma(e.target.value);
              }}
            />
            <div>
              <button type="submit">Continuar</button>
            </div>
          </form>
        </S.inputs>
      </S.Container>
      <p>{setValor}</p>
      {/* Tirar o set valor */}
    </>
  );
}
export default ElementoSenha;
