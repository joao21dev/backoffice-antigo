import React from "react";
import SidebarWithHeader from "../../Sidebar/sidebar";
import BankLineFormAddress from "../BankLineFormAddress";
import BankLineFormCard from "../BankLineFormCard";

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
