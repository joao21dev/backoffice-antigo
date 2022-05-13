import React from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import FormBankAccount from "../../components/accounts/InfoBankAccount";
import AccountInfo from "../../components/accounts/AccountInfo";
import NavAccount from "../../components/accounts/NavAccount";

const AccountBankAccounts = () => {
  return (
    <>
      <AccountInfo />

      <FormBankAccount />
    </>
  );
};

export default AccountBankAccounts;
