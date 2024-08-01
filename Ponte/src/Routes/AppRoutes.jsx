import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Formu from "../Components/organisms/Form";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exat element={<Home />}></Route>
        <Route path="/Form" element={<Formu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
