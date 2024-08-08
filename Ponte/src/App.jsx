import AppRoutes from "./Routes/AppRoutes.jsx";
import { GlobalStyles } from "../src/MainStyles.jsx";
import Card from "./Components/molecules/cards de Pagamento/index.jsx";
function App() {
  return (
    <>
      <GlobalStyles />
      {/* <AppRoutes /> */}
      <Card nomeProp={"Premium"} />
    </>
  );
}
export default App;
