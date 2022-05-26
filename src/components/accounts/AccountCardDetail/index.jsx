import React from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import FormCartao from "../../components/accounts/AccountsFormCard";
import FormAddress from "../../components/accounts/AccountsFormAddress";
import AccountInfo from "../../components/accounts/AccountInfo";
import NavAccount from "../../components/accounts/NavAccount";

const AccountCardDetail = () => {
  return (
    <>
      <SidebarWithHeader>
        <NavAccount />
        <AccountInfo />
        <FormCartao />
        <FormAddress name="Endereço de Entrega" />
      </SidebarWithHeader>
    </>
  );
};

export default AccountCardDetail;
