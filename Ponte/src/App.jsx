
import NavBar from "./Components/organisms/NavBar";
import SessaoInicial from "./Pages/LP-index/Sessão inicial";
import SobreNos from "./Pages/SobreNos/SobreNos"
import { StyleGlobal } from "./styleGlobal";

function App() {
  return (
    <>
      <StyleGlobal />
      <NavBar />
      <SessaoInicial />
      <SobreNos/>
    </>
  );
}
export default App;
