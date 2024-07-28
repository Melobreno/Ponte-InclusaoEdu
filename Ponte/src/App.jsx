import SobreNos from "../src/Pages/SobreNos/SobreNos";
import NavBar from "../src/Components/organisms/NavBar";
import MainSec from "./Pages/LP-index/Sessão inicial";
import { GlobalStyles } from "./MainStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <MainSec />
      <SobreNos />
    </>
  );
}
export default App;
