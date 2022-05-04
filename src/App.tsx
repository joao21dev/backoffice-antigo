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
import NavAccount from "./components/NavAccount";

export const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/account-detail" element={<AccountDetail />} />
        <Route path="/partner-detail" element={<PartnerDetail />} />
        <Route path="/bank-account" element={<BankAccount />} />
        <Route path="/card-detail" element={<CardDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  </>
);
