import imgLogo from "../../../Assets/logoPonte.svg";
import * as S from "./NavBarStyle.jsx";
import { Link } from "react-router-dom";
import Menu from "../../molecules/Menu";
import Barra from "../../molecules/BarraPesquisa/index.jsx";

function NavBar() {
  const possuiToken = !!localStorage.getItem("token");
  return (
    <S.Container>
      {!possuiToken && (
        <div>
          {/* <Link to={"/"}>
            <img src={imgLogo} alt="" />
          </Link> */}
        </div>
      )}
      {!possuiToken ? <Menu /> : <Barra />}
    </S.Container>
  );
}

export default NavBar;
