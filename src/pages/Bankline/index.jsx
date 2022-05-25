import React from "react";
import NavBankline from "../../components/BankLine/NavBankline";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import BankLineBoletos from "../BankLineBoletos";

const Bankline = () => {
  return (
    <>
      <SidebarWithHeader>
        <NavBankline />
      </SidebarWithHeader>
    </>
  );
};

export default Bankline;
