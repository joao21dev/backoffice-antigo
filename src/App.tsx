import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Contas";
import Login from "./pages/Login";
import AccountDetail from "./components/NavAccount";
import DadosPessoais from "./pages/ContasDetail";
import Documentos from "./pages/CartaoDetail";
import CartaoDetail from "./pages/CartaoDetail";
import Cartao from "./pages/Cartao";
import ContasDetail from "./pages/ContasDetail";

export const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/accounts" element={<Conta />} />
        <Route path="/accounts/account-detail" element={<ContasDetail />} />
        <Route
          path="/accounts/dados-pessoais"
          element={<DadosPessoais />}
        />
        <Route path="/accounts/documentos" element={<Documentos />} />
        <Route path="/accounts/cartao" element={<Cartao />} />
        <Route path="/accounts/cartao-detail" element={<CartaoDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);
