import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Captacao from "../Captacao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/captacao" element={<Captacao />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
