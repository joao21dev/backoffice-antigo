import React from "react";
import BankInfoStat from "../../components/accounts/BankInfoStat";
import NavAccount from "../../components/accounts/NavAccount";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

const AccountsInfo = () => {
  return (
    <>
      <SidebarWithHeader>
        <BankInfoStat />
        <NavAccount />
      </SidebarWithHeader>
    </>
  );
};

export default AccountsInfo;
