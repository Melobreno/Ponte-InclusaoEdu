import { Container } from "./style";
import Btn from "../Button";
import { useState } from "react";
import api from "../../../api/api";
function FormResumido() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  function ehIgual(senha, confirmSenha) {
    return senha === confirmSenha;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (senha.length < 1 && nome.length < 1 && email.length < 1) {
      alert("Não foi possivel efetuar o cadastro");
    }
    if (ehIgual(senha, confirmSenha)) {
      try {
        await api.post("/adicionar", {
          name_user: nome,
          email_user: email,
          password_user: senha,
        });

        alert("Cadastro efetuado com sucesso!!");
        setNome("");
        setEmail("");
        setSenha("");
        setConfirmSenha("");
      } catch (error) {
        console.error(`Erro ao inserir dados: ${error}`);
        alert("Erro ao efetuar o cadastro");
      }
    } else {
      alert("As senhas não coincidem.");
    }
  }

  return (
    <Container>
      <h1>Faça seu Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome Completo:</label>
        <input
          type="text"
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label>Senha:</label>
        <input
          type="text"
          value={senha}
          onChange={(event) => {
            setSenha(event.target.value);
          }}
        />

        <label>Confirme sua Senha:</label>
        <input
          type="text"
          value={confirmSenha}
          onChange={(event) => {
            setConfirmSenha(event.target.value);
          }}
        />

        <div className="btnContainer">
          <Btn txt={"Continuar"} />
        </div>
      </form>
    </Container>
  );
}

export default FormResumido;
