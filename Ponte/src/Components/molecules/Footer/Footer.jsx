import * as S from "./footerStyle";
import img from "../../../assets/logoPonte.svg";
import fb from "../../../assets/fb.svg";
import x from "../../../assets/x.svg";
import insta from "../../../assets/instagram.svg";

function Footer() {
  return (
    <S.Section>
      <S.Container>
        <div>
          <img src={img} alt="" className="logoPonte" />
        </div>

        <ul>
          <h2>Sobre </h2>
          <li>Sobre nós</li>
          <li>Saiba mais</li>
          <li>Funcionalidades</li>
        </ul>
        <ul>
          <h2>Suporte</h2>
          <a href="mailto: ponteinclusaoedu@gmail.com">ponte@instituto.com</a>
          <li>FAQ</li>
          <li>Contato</li>
        </ul>

        <ul className="social">
          <h2>Siga a Ponte</h2>
          <li>
            <img src={insta} alt="" />
            <a
              href="https://www.instagram.com/ponte_inclusao_educacional/"
              target="_blank"
            >
              @ponteintegraedu
            </a>
          </li>
          <li>
            <img src={x} alt="" />
            @ponteintegraedu
          </li>
          <li>
            <img src={fb} alt="" />
            @ponteintegraedu
          </li>
        </ul>
      </S.Container>
      <S.TextComple>
        <p>Copyright ©️ 2024 Ponte. All Rights Reserved</p>
      </S.TextComple>
    </S.Section>
  );
}
export default Footer;
