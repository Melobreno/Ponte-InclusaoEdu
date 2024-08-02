import { GlobalStyles } from "../MainStyles";
// import SobreNos from "./SobreNos/SobreNos";
// import NavBar from "../Components/organisms/NavBar";
// import MainSec from "./LP-index/Sessão inicial";
// import Footer from "../Components/molecules/Footer/Footer";
// import Funcionalidades from "../Pages/LP-index/Funcionalidades/funcionalidades";
// import Faq from "../Components/organisms/FAQ";
import Captacao from "./Captacao/index";
function Home() {
  return (
    <>
      <GlobalStyles />
      {/* <NavBar />
      <MainSec />
      <SobreNos />
      <Funcionalidades />
      <Faq />
      <Footer /> */}
      <Captacao />
    </>
  );
}
export default Home;
