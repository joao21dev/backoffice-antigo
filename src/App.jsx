import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Accounts from "./pages/Accounts";

import Users from "./pages/Users";
import Plans from "./pages/Plans";
import PlanDetail from "./pages/PlanDetail";
import Fares from "./pages/Fares";
import FaresCreate from "./pages/FaresCreate";
import Agencias from "./pages/Agencias";
import AgenciaDetailForm from "./components/AgenciaDetailForm";
import AgenciaDetail from "./pages/AgenciaDetail";
import Settings from "./pages/Settings";
import Terms from "./pages/Terms";
import UsersCreate from "./pages/UsersCreate";
import PermissionsCreate from "./pages/PermissionsCreate";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Bankline from "./pages/Bankline";
import AccountsInfo from "./components/accounts/AccountsInfo";
import AccountCardDetail from "./components/accounts/AccountCardDetail";
import AccountsPartnerDetail from "./components/accounts/AccountsPartnerDetail";
import BankLineBoletoDetail from "./components/BankLine/BankLineBoletoDetail";
import BankLineCardDetail from "./components/BankLine/BankLineCardDetail";
import BankLineCompras from "./components/BankLine/BankLineCompras";

export const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/accounts/:id" element={<AccountsInfo />} />
          <Route path="/accounts-card/:id" element={<AccountCardDetail />} />
          <Route
            path="/bankline-boleto/:id"
            element={<BankLineBoletoDetail />}
          />
          <Route
            path="/accounts-partner/:id"
            element={<AccountsPartnerDetail />}
          />
          <Route path="/bankline-card/:id" element={<BankLineCardDetail />} />
          <Route path="/bankline-compra/:id" element={<BankLineCardDetail />} />
          <Route path="/bankline-pix" element={<BankLineCardDetail />} />
          <Route path="/bankline-p2p" element={<BankLineCardDetail />} />
          <Route path="/bankline-compras" element={<BankLineCompras />} />
          <Route path="/bankline" element={<Bankline />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/fares" element={<Fares />} />
          <Route path="/agencias" element={<Agencias />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/fares-create" element={<FaresCreate />} />
          <Route path="/users-create" element={<UsersCreate />} />
          <Route path="/permissions-create" element={<PermissionsCreate />} />
          <Route path="/plan-detail" element={<PlanDetail />} />
          <Route path="/agencia-detail" element={<AgenciaDetail />} />
          <Route path="/agencias-create" element={<AgenciaDetailForm />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
