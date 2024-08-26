import SobreNos from "./SobreNos/SobreNos";
import NavBar from "../Components/organisms/NavBar";
import MainSec from "./LP-index/Sessão inicial";
import Footer from "../Components/molecules/Footer/Footer";
import Funcionalidades from "../Pages/LP-index/Funcionalidades/funcionalidades";
import Faq from "../Components/organisms/FAQ";

function Home() {
  return (
    <>
      <NavBar />
      <MainSec />
      <SobreNos />
      <Funcionalidades />
      <Faq />
      <Footer />
      <df-messenger
        intent="WELCOME"
        chat-title="Ponte: Inclusão Edu"
        agent-id="4730aa58-8ecc-4b17-93dc-e16520caef3c"
        language-code="en"
      ></df-messenger>
    </>
  );
}
export default Home;
