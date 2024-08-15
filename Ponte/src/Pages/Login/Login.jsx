import { Imagem, Container, Section, Fundo } from "./LoginStyled";
import imgLogin from "../../Assets/tabletLogin.svg";
import logo from "../../Assets/logoPonte.svg";
import Btn from "../../Components/atoms/Button/index";
import { Link } from "react-router-dom";

function Login() {
  const value = "Enviar";
  return (
    <>
      <Section>
        <Fundo>
          <Imagem>
            <img src={imgLogin} alt="Vetor login" />
          </Imagem>
        </Fundo>

        <Container>
          <Link to={"/"}>
            <img src={logo} alt="Imagem Logo" />
          </Link>
          <h1>Bem-vindo!</h1>
          <form className="loginContainer">
            <p>Digite seu e-mail:</p>
            <input type="email" name="" id="" />
            <p>Digite sua senha:</p>
            <input type="password" name="" id="" />
            <Link to={"/redefinirSenha"}>
              <a className="esqueceuSenha" href="">
                Esqueci minha senha
              </a>
            </Link>
            <div className="botao">
              <Link to={"/feed"}>
                <Btn txt={value} />
              </Link>
            </div>

            <div className="cadastre">
              Ainda não possui conta?
              <Link to={"/cadastroResp"}>
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
