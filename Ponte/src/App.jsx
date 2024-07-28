import NavBar from "./Components/organisms/NavBar";
import SessaoInicial from "./Pages/LP-index/Sessão inicial";
import { StyleGlobal } from "./styleGlobal";
import SobreNos from "./Pages/SobreNos/SobreNos";

function App() {
  return (
    <>
      <StyleGlobal />
      <NavBar />
      <SessaoInicial />
      <SobreNos />
    </>
  );
}
export default App;
