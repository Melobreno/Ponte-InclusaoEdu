import { GlobalStyles } from "../MainStyles";
import SobreNos from "./SobreNos/SobreNos";
import NavBar from "../Components/organisms/NavBar";
import MainSec from "./LP-index/Sessão inicial";
import Footer from "../Components/molecules/Footer/Footer"

function Home() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <MainSec />
      <SobreNos />
      <Footer />
    </>
  );
}
export default Home;
