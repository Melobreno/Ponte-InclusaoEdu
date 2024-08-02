import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import CadastroR from "../../Components/organisms/CadastroResp";
import CadastroP from "../../Components/organisms/CadastroProf";
import RedefinirSenha from "../Senhas/RedefinirSenha/RedefenirSenha";
import CodigoAtivacao from '../../Pages/Senhas/RedefinirSenha/RedefenirSenha'
import NovaSenha from "../Senhas/NovaSenha/NovaSenha";
import Login from "../Login/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exat element={<Home />}></Route>
        <Route path="/CadastroResp" element={<CadastroR />}></Route>
        <Route path="/CadastroProf" element={<CadastroP />}></Route>
        <Route path="/RedefinirSenha" element={<RedefinirSenha />}></Route>
        <Route path="/CodigoAtivacao" element={<CodigoAtivacao />}></Route>
        <Route path="/NovaSenha" element={<NovaSenha />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;
