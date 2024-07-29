import * as S from "./footerStyle";
import img from "../../../assets/logoPonte.svg";
import fb from "../../../assets/social/fb.svg";
import x from "../../../assets/social/x.svg";
import insta from "../../../assets/social/instagram.svg";

function Footer() {
  return (
    <>
      <S.Container>
        <div>
          <img src={img} alt="" />
        </div>

        <ul>
          <h2>Sobre </h2>
          <li>Sobre nós</li>
          <li>Saiba mais</li>
          <li>Funcionalidade</li>
        </ul>
        <ul>
          <h2>Suporte</h2>
          <li>ponte@instituto.com</li>
          <li>FAQ</li>
          <li>Contato</li>
        </ul>

        <ul className="social">
          <h2>Siga a Ponte</h2>
          <li>
            <img src={insta} alt="" />
            <p>@ponteintegraedu</p>
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
    </>
  );
}
export default Footer;
