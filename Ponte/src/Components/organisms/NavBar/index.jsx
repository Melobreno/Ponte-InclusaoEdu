import * as S from "./NavBarStyle.jsx";
import Menu from "../../molecules/Menu";
import Barra from "../../molecules/BarraPesquisa/index.jsx";
import { Surgir } from "../../motion/index.jsx";

function NavBar() {
  const possuiToken = !!localStorage.getItem("token");
  return (
    <>
      <Surgir>
        <S.Container>{!possuiToken ? <Menu /> : <Barra />}</S.Container>
      </Surgir>
    </>
  );
}
export default NavBar;
