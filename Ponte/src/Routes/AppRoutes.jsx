import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Captacao from "../Pages/Captacao";
import CadastroR from "../Components/organisms/CadastroResp";
import CadastroP from "../Components/organisms/CadastroProf";
import NovaSenha from "../Pages/Senhas/NovaSenha/NovaSenha";
import CodigoAtivacao from "../Pages/Senhas/CodigoAtivacao/CodigoAtivacao";
import RedefinirSenha from "../Pages/Senhas/RedefinirSenha/RedefinirSenha";
import Login from "../Pages/Login/Login";

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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
