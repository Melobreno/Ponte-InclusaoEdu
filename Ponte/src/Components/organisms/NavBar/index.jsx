import imgLogo from "../../../assets/logoPonte.svg";
import * as S from "./NavBarStyle.jsx";
import Menu from "../../molecules/Menu";

function NavBar() {
  return (
    <>
      <S.Container>
        <img src={imgLogo} alt="" />
        <Menu />
      </S.Container>
    </>
  );
}

export default NavBar;
