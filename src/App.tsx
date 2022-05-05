import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import BankAccount from "./pages/AccountBankAccounts";
import AccountDetail from "./pages/AccountDetail";
import Accounts from "./pages/Accounts";
import Documents from "./pages/AccountDocuments";
import Cards from "./pages/AccountCards";
import Transactions from "./pages/AccountTransactions";
import Partners from "./pages/AccountPartners";
import Activities from "./pages/AccountActivities";
import Devices from "./pages/AccountDevices";
import PartnerDetail from "./pages/AccountsPartnerDetail";
import NavAccount from "./components/accounts/NavAccount";
import CardDetail from "./pages/AccountCardDetail";
import Boletos from "./pages/BankLineBoletos";
import BoletoDetail from "./pages/BankLineBoletosDetail";

export const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/account-detail" element={<AccountDetail />} />
        <Route path="/partner-detail" element={<PartnerDetail />} />
        <Route path="/boleto-detail" element={<BoletoDetail />} />
        <Route path="/bank-account" element={<BankAccount />} />
        <Route path="/card-detail" element={<CardDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);
