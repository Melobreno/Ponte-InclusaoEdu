import { GlobalStyles } from "../MainStyles";
import SobreNos from "./SobreNos/SobreNos";
import NavBar from "../Components/organisms/NavBar";
import MainSec from "./LP-index/Sessão inicial";
import Footer from "../Components/molecules/Footer/Footer";
import Faq from "../Components/organisms/FAQ";
function Home() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <MainSec />
      <SobreNos />
      <Faq />
      <Footer />
    </>
  );
}
export default Home;
