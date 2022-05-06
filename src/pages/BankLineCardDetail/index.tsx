import React from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";

import FormCartao from "../../components/accounts/AccountsFormCard";
import FormAddress from "../../components/accounts/AccountsFormAddress";
import BankLineFormCard from "../../components/BankLine/BankLineFormCard";
import BankLineFormAddress from "../../components/BankLine/BankLineFormAddress";

const BankLineCardDetail = () => {
  return (
    <>
      <SidebarWithHeader>
        <BankLineFormCard />
        <BankLineFormAddress name="Endereço de Entrega" />
      </SidebarWithHeader>
    </>
  );
};

export default BankLineCardDetail;
