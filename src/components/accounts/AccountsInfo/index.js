import React from "react";
import SidebarWithHeader from "../../Sidebar/sidebar";
import BankInfoStat from "../BankInfoStat";
import NavAccount from "../NavAccount";


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
