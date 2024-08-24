import Planos from "../../Components/organisms/Planos";
import NavBar from "../../Components/organisms/NavBar";
import Footer from "../../Components/molecules/Footer/Footer";
import { Main } from "./style";

function Assinatura() {
  return (
    <Main>
      <NavBar />
      <Planos />
      <Footer />
    </Main>
  );
}

export default Assinatura;
