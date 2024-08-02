import { GlobalStyles } from "../../MainStyles";
import { Imagem, Container, Section, Fundo } from "./LoginStyled";
import imgLogin from "../../Assets/tabletLogin.svg";
import logo from "../../Assets/logoPonte.svg";
import Btn from "../../Components/atoms/Button/index";
import fb from "../../Assets/fb.svg";
import x from "../../Assets/x.svg";
import insta from "../../Assets/instagram.svg";
function Login() {
  const value = "Entrar";
  return (
    <>
      <GlobalStyles />
      <Section>
        <Fundo>
          <Imagem>
            <img src={imgLogin} alt="" />
          </Imagem>
        </Fundo>

        <Container>
          <img src={logo} alt="" />
          <h1>Bem-vindo!</h1>
          <div className="loginContainer">
            <p>Digite seu e-mail:</p>
            <input type="email" name="" id="" />
            <p>Digite sua senha:</p>
            <input type="password" name="" id="" />
            <a className="esqueceuSenha" href="">
              Esqueci minha senha
            </a>
            <div className="botao">
              <Btn txt={value} />
            </div>

            <div className="cadastre">
              Ainda não possui conta? <a href="">Cadasatre-se</a>
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
