import * as S from "./NavBarStyle.jsx";
import Menu from "../../molecules/Menu";
import Barra from "../../molecules/BarraPesquisa/index.jsx";

function NavBar() {
  const possuiToken = !!localStorage.getItem("token");
  return <S.Container>{!possuiToken ? <Menu /> : <Barra />}</S.Container>;
}

export default NavBar;
