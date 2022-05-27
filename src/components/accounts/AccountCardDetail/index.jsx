import React from "react";
import SidebarWithHeader from "../../Sidebar/sidebar";
import AccountInfo from "../AccountInfo";
import AccountsFormAddress from "../AccountsFormAddress";
import AccountsFormCard from "../AccountsFormCard";
import NavAccount from "../NavAccount";

const AccountCardDetail = () => {
  return (
    <>
      <SidebarWithHeader>
       
        <AccountInfo />
        <AccountsFormCard />
        <AccountsFormAddress name="Endereço de Entrega" />
      </SidebarWithHeader>
    </>
  );
};

export default AccountCardDetail;
