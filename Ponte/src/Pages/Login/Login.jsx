import { useState } from "react";
import { Imagem, Container, Section, Fundo } from "./LoginStyled";
import imgLogin from "../../Assets/tabletLogin.svg";
import logo from "../../Assets/logoPonte.svg";
import voltar from "../../Assets/voltar.svg";
import Btn from "../../Components/atoms/Button/index";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

function Login() {
  const navigate = useNavigate();
  const value = "Entrar";

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.length < 1 || senha.length < 1) {
      alert("Por favor insira os seus dados");
      return;
    }

    try {
      const res = await api.post("/login", {
        email_user: email,
        password_user: senha,
      });
      const token = res.data.token;
      localStorage.setItem("token", res.data.token);
      navigate("/feed");
    } catch (error) {
      setError("Login falhou. Verifique suas credenciais.");
    }
  };

  return (
    <>
      <Section>
        <Fundo>
          <Imagem>
            <img src={imgLogin} alt="Vetor login" />
          </Imagem>
        </Fundo>

        <Container>
          <div className="voltar">
            <Link className="link" to={"/"}>
              <a href="">Voltar</a>
              <img src={voltar} alt="" />
            </Link>
          </div>
          <Link className="link" to={"/"}>
            <img src={logo} alt="Imagem Logo" />
          </Link>
          <h1>Bem-vindo!</h1>
          <form className="loginContainer" onSubmit={handleSubmit}>
            <p>Digite seu e-mail:</p>
            <input
              type="email"
              name="email"
              id="current-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <p>Digite sua senha:</p>
            <input
              type="password"
              name="password"
              id="current-password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
            <Link to={"/verificaemail"}>
              <a className="esqueceuSenha" href="">
                Esqueci minha senha
              </a>
            </Link>
            <div className="botao">
              <Btn txt={value} />
              {error && <span>{error}</span>}
            </div>

            <div className="cadastre">
              Ainda não possui conta?
              <Link to={"/cadastro"}>
                <a href="">Cadasatre-se</a>
              </Link>
            </div>
          </form>
        </Container>
      </Section>
    </>
  );
}
export default Login;
