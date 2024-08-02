import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Captacao from "../Captacao";
import CadastroR from "../../Components/organisms/CadastroResp";
import CadastroP from "../../Components/organisms/CadastroProf";
import RedefinirSenha from "../Senhas/RedefinirSenha/RedefenirSenha";
import CodigoAtivacao from '../Senhas/CodigoAtivacao/CodigoAtivacao'
import NovaSenha from "../Senhas/NovaSenha/NovaSenha";
import Login from "../Login/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" exat element={<Home />}></Route>
        <Route path="/cadastroResp" element={<CadastroR />}></Route>
        <Route path="/cadastroProf" element={<CadastroP />}></Route>
        <Route path="/captacao" element={<Captacao />}></Route>
        <Route path="/redefinirSenha" element={<RedefinirSenha />}></Route>
        <Route path="/codigoAtivacao" element={<CodigoAtivacao />}></Route>
        <Route path="/novaSenha" element={<NovaSenha />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;
