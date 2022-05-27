import React from "react";
import SidebarWithHeader from "../../Sidebar/sidebar";
import AccountInfo from "../AccountInfo";
import AccountsFormAddress from "../AccountsFormAddress";
import AccountsFormPersonalData from "../AccountsFormPersonalData";


const AccountsPartnerDetail = () => {
  return (
    <>
      <SidebarWithHeader>
        <AccountInfo />
        <AccountsFormPersonalData />
        <AccountsFormAddress name="Endereço" />
      </SidebarWithHeader>
    </>
  );
};

export default AccountsPartnerDetail;
