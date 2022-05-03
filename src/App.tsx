import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CardDetail from "./pages/CardDetail";
import BankAccount from "./pages/BankAccount";
import AccountDetail from "./pages/AccountDetail";
import Accounts from "./pages/Contas";
import Documents from "./pages/Documents";
import Cards from "./pages/Cards";
import Transactions from "./pages/Transactions";
import Partners from "./pages/Partners";
import Activities from "./pages/Activities";
import Devices from "./pages/Devices";
import PartnerDetail from "./pages/PartnerDetail";

export const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/accounts/documents" element={<Documents />} />
        <Route path="/accounts/cards" element={<Cards />} />
        <Route path="/accounts/transactions" element={<Transactions />} />
        <Route path="/accounts/devices" element={<Devices />} />
        <Route path="/accounts/partners" element={<Partners />} />
        <Route path="/accounts/activities" element={<Activities />} />
        <Route path="/accounts/account-detail" element={<AccountDetail />} />
        <Route path="/accounts/partner-detail" element={<PartnerDetail />} />
        <Route path="/accounts/bank-account" element={<BankAccount />} />
        <Route path="/accounts/card-detail" element={<CardDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);
