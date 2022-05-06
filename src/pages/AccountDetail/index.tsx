import React, { useState } from "react";

import Endereco from "../../components/accounts/AccountsFormAddress";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";

import FormDadosPessoais from "../../components/accounts/AccountsFormPersonalData";
import AccountInfo from "../../components/accounts/AccountInfo";
import FormCartao from "../../components/accounts/AccountsFormCard";

const AccountsAccountDetail = () => {
  return (
    <>
      <SidebarWithHeader>
        <NavAccount />
        <AccountInfo />
        <FormDadosPessoais />
        <Endereco name="Endereço" />
      </SidebarWithHeader>
    </>
  );
};

export default AccountsAccountDetail;
