import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
<<<<<<< HEAD
// import RedefinirSenha from "../Senhas/RedefinirSenha/RedefenirSenha";
// import CodigoAtivacao from '../Senhas/CodigoAtivacao/CodigoAtivacao'
// import NovaSenha from "../Senhas/NovaSenha/NovaSenha";
=======
import Captacao from "../Captacao";
import CadastroR from "../../Components/organisms/CadastroResp";
import CadastroP from "../../Components/organisms/CadastroProf";
import RedefinirSenha from "../Senhas/RedefinirSenha/RedefenirSenha";
import CodigoAtivacao from '../Senhas/CodigoAtivacao/CodigoAtivacao'
import NovaSenha from "../Senhas/NovaSenha/NovaSenha";
>>>>>>> d9089579b86e512a5e34236b6147f24216c3aad9
import Login from "../Login/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/RedefinirSenha" element={<RedefinirSenha />}></Route> */}
        {/* <Route path="/CodigoAtivacao" element={<CodigoAtivacao />}></Route> */}
        {/* <Route path="/NovaSenha" element={<NovaSenha/>}></Route> */}
        <Route path="/Login" element={<Login />}></Route>
=======
    
        <Route path="/" exat element={<Home />}></Route>
        <Route path="/cadastroResp" element={<CadastroR />}></Route>
        <Route path="/cadastroProf" element={<CadastroP />}></Route>
        <Route path="/captacao" element={<Captacao />}></Route>
        <Route path="/redefinirSenha" element={<RedefinirSenha />}></Route>
        <Route path="/codigoAtivacao" element={<CodigoAtivacao />}></Route>
        <Route path="/novaSenha" element={<NovaSenha />}></Route>
        <Route path="/login" element={<Login />}></Route>
>>>>>>> d9089579b86e512a5e34236b6147f24216c3aad9
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
