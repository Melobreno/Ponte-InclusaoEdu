import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import CadastroR from "../../Components/organisms/CadastroResp";
import CadastroP from "../../Components/organisms/CadastroProf";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exat element={<Home />}></Route>
        <Route path="/CadastroResp" element={<CadastroR />}></Route>
        <Route path="/CadastroProf" element={<CadastroP />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
