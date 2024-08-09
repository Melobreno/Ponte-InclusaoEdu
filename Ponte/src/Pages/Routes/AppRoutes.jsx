import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
// import RedefinirSenha from "../Senhas/RedefinirSenha/RedefenirSenha";
// import CodigoAtivacao from '../Senhas/CodigoAtivacao/CodigoAtivacao'
// import NovaSenha from "../Senhas/NovaSenha/NovaSenha";
import Login from "../Login/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/RedefinirSenha" element={<RedefinirSenha />}></Route> */}
        {/* <Route path="/CodigoAtivacao" element={<CodigoAtivacao />}></Route> */}
        {/* <Route path="/NovaSenha" element={<NovaSenha/>}></Route> */}
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
