import imgLogo from "../../../Assets/logoPonte.svg";
import * as S from "./NavBarStyle.jsx";
import { Link } from "react-router-dom";
import Menu from "../../molecules/Menu";

function NavBar() {
  return (
    <>
      <S.Container>
        <Link to={"/"}>
          <img src={imgLogo} alt="" />
        </Link>
        <Menu />
      </S.Container>
    </>
  );
}

export default NavBar;
