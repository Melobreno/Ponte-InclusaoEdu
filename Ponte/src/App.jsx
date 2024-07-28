import NavBar from "./Components/organisms/NavBar";
import SessaoInicial from "./Pages/LP-index/Sessão inicial";
import { StyleGlobal } from "./styleGlobal";

function App() {
  return (
    <>
      <StyleGlobal />
      <NavBar />
      <SessaoInicial />
    </>
  );
}

export default App;
