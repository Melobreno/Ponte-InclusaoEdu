
import * as S from "./footerStyle";
import img from "../../../assets/logoPonte.svg"

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

        <ul>
          <h2>Siga a Ponte</h2>
          <li>@ponteintegraedu</li>
          <li>@ponteintegraedu</li>
          <li>@ponteintegraedu</li>
        </ul>
      </S.Container>
      <S.TextComple>
        <p>Copyright ©️ 2024 Ponte. All Rights Reserved</p>
      </S.TextComple>
    </>
  );
}
export default Footer