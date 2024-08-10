import { GlobalStyles } from "../../MainStyles";
import { Imagem, Container, Section, Fundo } from "./LoginStyled";
import imgLogin from "../../Assets/tabletLogin.svg";
import logo from "../../Assets/logoPonte.svg";
import Btn from "../../Components/atoms/Button/index";
import fb from "../../Assets/fb.svg";
import x from "../../Assets/x.svg";
import insta from "../../Assets/instagram.svg";
import { Link } from "react-router-dom";

function Login() {
  const value = "Entrar";
  return (
    <>
      <GlobalStyles />
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
          <div className="loginContainer">
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
            <ul className="social">
              <li>
                <img src={insta} alt="" />
              </li>
              <li>
                <img src={fb} alt="" />
              </li>
              <li>
                <img src={x} alt="" />
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
export default Login;
