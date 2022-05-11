import React, { useState } from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";

import FormCartao from "../../components/accounts/AccountsFormCard";
import FormAddress from "../../components/accounts/AccountsFormAddress";
import AccountInfo from "../../components/accounts/AccountInfo";

const AccountCardDetail = () => {
  return (
    <>
      <SidebarWithHeader>
        <NavAccount></NavAccount>
        <AccountInfo />
        <FormCartao />
        <FormAddress name="Endereço de Entrega" />
      </SidebarWithHeader>
    </>
  );
};

export default AccountCardDetail;
