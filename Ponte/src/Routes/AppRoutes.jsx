import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Captacao from "../Pages/Captacao";
import CadastroR from "../Pages/Cadastro/CadastroResp";
import CadastroP from "../Pages/Cadastro/CadastroProf";
import RedefinirSenha from "../Pages/Senhas/RedefinirSenha/RedefinirSenha";
import CodigoAtivacao from "../Pages/Senhas/CodigoAtivacao/CodigoAtivacao";
import NovaSenha from "../Pages/Senhas/NovaSenha/NovaSenha";
import Login from "../Pages/Login/Login";
import Assinatura from "../Pages/Assinatura";
import ConfirmarCompra from "../Pages/ConfirmarCompra/";
import Feed from "../Pages/Feed/index";
import Chat from "../Pages/ChatGeral";
import Documentacao from "../Pages/Documentacao/Documentacao";
import AtividadeProf from "../Pages/Atividade/AtividadeProf";
import AtividadeResp from "../Pages/Atividade/AtividadeResp";
import Mapeamento from "../Pages/Mapeamento/index";
import CadastroRes from "../Pages/Cadastro/CadastroResumido";

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
        <Route path="/Assinaturas" element={<Assinatura />}></Route>
        <Route path="/Pagamento" element={<ConfirmarCompra />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/Doc" element={<Documentacao />}></Route>
        <Route path="/Atividades" element={<AtividadeProf />}></Route>
        <Route path="/AtividadeResp" element={<AtividadeResp />}></Route>
        <Route path="/mapeamento" element={<Mapeamento />}></Route>
        <Route path="/cadas" element={<CadastroRes />}></Route>{" "}
        {/* Chamando o Formulário resumido *APAGAR* */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
