import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import BankLineBoletos from "./pages/BankLineBoletos";
import BankLineCompras from "./pages/BankLineCompras";
import AccountDocuments from "./pages/AccountDocuments";
import AccountCards from "./pages/AccountCards";
import AccountTransactions from "./pages/AccountTransactions";
import AccountDevices from "./pages/AccountDevices";
import AccountPartners from "./pages/AccountPartners";
import AccountActivities from "./pages/AccountActivities";
import AccountsPartnerDetail from "./pages/AccountsPartnerDetail";
import AccountsAccountDetail from "./pages/AccountDetail";
import BankLineBoletosDetail from "./pages/BankLineBoletoDetail";
import AccountBankAccounts from "./pages/AccountBankAccounts";
import AccountCardDetail from "./pages/AccountCardDetail";
import BankLineCardDetail from "./pages/BankLineCardDetail";
import BanklineCards from "./pages/BankLineCards";
import BankLineCashouts from "./pages/BanklineCashouts";
import BankLinePayments from "./pages/BankLinePayments";
import BankLinePaymentDetail from "./pages/BankLinePaymentDetail";
import BankLineP2P from "./pages/BankLineP2P";
import BankLinePix from "./pages/BankLinePix";
import BankLineTed from "./pages/BankLineTed";
import Accounts from "./pages/Accounts";
import Users from "./components/Testes/users";
import UserInfo from "./components/Testes/userInfo";
import Plans from "./pages/Plans";
import PlanDetail from "./pages/PlanDetail";
import Fares from "./pages/Fares";
import FaresCreate from "./pages/FaresCreate";
import AccountsInfo from "./pages/AccountsInfo";

export const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserInfo />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/accounts/:id" element={<AccountsInfo />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/fares" element={<Fares />} />
        <Route path="/fares-create" element={<FaresCreate />} />
        <Route path="/plan-detail" element={<PlanDetail />} />
        {/* 
        <Route path="/account-documents/:id" element={<AccountDocuments />} />
        <Route path="/account-cards/:id" element={<AccountCards />} />
        <Route path="/account-transactions" element={<AccountTransactions />} />
        <Route path="/account-devices" element={<AccountDevices />} />
        <Route path="/account-partners" element={<AccountPartners />} />
        <Route
          path="/account-activities"
          element={<AccountActivities />}
        />{" "} */}
        <Route path="/account-card-detail" element={<AccountCardDetail />} />
        <Route
          path="/account-partner-detail"
          element={<AccountsPartnerDetail />}
        />{" "}
        <Route path="/account-bank-account" element={<AccountBankAccounts />} />{" "}
        <Route path="/bankline-boletos" element={<BankLineBoletos />} />
        <Route
          path="/bankline-boleto-detail"
          element={<BankLineBoletosDetail />}
        />
        <Route path="/bankline-cards" element={<BanklineCards />} />
        <Route path="/bankline-pix" element={<BankLinePix />} />
        <Route path="/bankline-ted" element={<BankLineTed />} />
        <Route path="/bankline-p2p" element={<BankLineP2P />} />
        <Route path="/bankline-compras" element={<BankLineCompras />} />
        <Route path="/bankline-cashouts" element={<BankLineCashouts />} />
        <Route path="/bankline-payments" element={<BankLinePayments />} />
        <Route
          path="/bankline-payment-detail"
          element={<BankLinePaymentDetail />}
        />
        <Route path="/bankline-card-detail" element={<BankLineCardDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);
