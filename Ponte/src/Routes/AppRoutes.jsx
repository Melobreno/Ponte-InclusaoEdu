import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Captacao from "../Pages/Captacao";
import CadastroR from "../Pages/Cadastro/CadastroResp";
import CadastroP from "../Pages/Cadastro/CadastroProf";
import RedefinirSenha from "../Pages/Senhas/verificaEmail/RedefinirSenha";
import NovaSenha from "../Pages/Senhas/NovaSenha/NovaSenha";
import Login from "../Pages/Login/Login";
import Assinatura from "../Pages/Assinatura";
import ConfirmarCompra from "../Pages/ConfirmarCompra/";
import Feed from "../Pages/Feed/index";
import Chat from "../Pages/ChatGeral";
import Documentacao from "../Pages/Documentacao/Documentacao";
import AtividadeProf from "../Pages/Atividade/AtividadeProf";
import AtividadeResp from "../Pages/Atividade/AtividadeResp";
import CadastroRes from "../Pages/Cadastro/CadastroResumido";
import PrivateRoute from "./privateRoutes";
import PgtoConfirmado from "../Pages/ConfirmarCompra/PagamentoRealziado/index";
import Mapeamento from "../Pages/Mapeamento";
import TelaCarregamento from "../Components/atoms/telaCarregamento/TelaCarregamneto";
import Perfilprof from "../Pages/Perfil/Perfilprofi";
import Profissionais from "../Pages/Profissionais";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/captacao" element={<Captacao />}></Route>
        <Route path="/NovaSenha" element={<NovaSenha />}></Route>
        <Route path="/verificaemail" element={<RedefinirSenha />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<CadastroRes />}></Route>
        <Route path="/Assinaturas" element={<Assinatura />}></Route>
        <Route path="/Pagamento" element={<ConfirmarCompra />}></Route>
        <Route path="/pgtoConfirmado" element={<PgtoConfirmado />}></Route>
        <Route path="/carregamento" element={<TelaCarregamento />} />
        <Route
          path="/perfilprof"
          element={
            <PrivateRoute>
              <Perfilprof />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profissionais"
          element={
            <PrivateRoute>
              <Profissionais />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/Feed"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/Doc"
          element={
            <PrivateRoute>
              <Documentacao />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/Atividades"
          element={
            <PrivateRoute>
              <AtividadeProf />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/AtividadeResp"
          element={
            <PrivateRoute>
              <AtividadeResp />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/mapeamento"
          element={
            <PrivateRoute>
              <Mapeamento />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cadastroResp"
          element={
            <PrivateRoute>
              <CadastroR />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cadastroProf"
          element={
            <PrivateRoute>
              <CadastroP />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
