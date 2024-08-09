import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Captacao from "../Captacao";
import CadastroR from "../../Components/organisms/CadastroResp";
import CadastroP from "../../Components/organisms/CadastroProf";
import NovaSenha from "../Senhas/NovaSenha/NovaSenha";
import CodigoAtivacao from "../Senhas/CodigoAtivacao/CodigoAtivacao";
import RedefinirSenha from "../Senhas/RedefinirSenha/RedefinirSenha";
import Login from "../Login/Login";

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
