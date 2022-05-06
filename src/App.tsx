import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Accounts from "./pages/Accounts";
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

export const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/account-documents" element={<AccountDocuments />} />
        <Route path="/account-cards" element={<AccountCards />} />
        <Route path="/account-transactions" element={<AccountTransactions />} />
        <Route path="/account-devices" element={<AccountDevices />} />
        <Route path="/account-partners" element={<AccountPartners />} />
        <Route
          path="/account-activities"
          element={<AccountActivities />}
        />{" "}
        <Route path="/account-card-detail" element={<AccountCardDetail />} />
        <Route
          path="/accounts-account-detail"
          element={<AccountsAccountDetail />}
        />
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
