import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Captacao from "../Pages/Captacao";
import CadastroR from "../Pages/Cadastro/CadastroResp";
import CadastroP from "../Pages/Cadastro/CadastroProf";
import RedefinirSenha from "../Pages/Senhas/RedefinirSenha/RedefinirSenha";
import CodigoAtivacao from "../Pages/Senhas/CodigoAtivacao/CodigoAtivacao";
import NovaSenha from "../Pages/Senhas/NovaSenha/NovaSenha";
import Login from "../Pages/Login/Login";
import Feed from "../Pages/Feed/index";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cadastroResp" element={<CadastroR />}></Route>
        <Route path="/cadastroProf" element={<CadastroP />}></Route>
        <Route path="/captacao" element={<Captacao />}></Route>
        <Route path="/CodigoAtivacao" element={<CodigoAtivacao />}></Route>
        <Route path="/NovaSenha" element={<NovaSenha />}></Route>
        <Route path="/RedefinirSenha" element={<RedefinirSenha />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
