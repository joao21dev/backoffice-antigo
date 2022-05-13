import React, { useState } from "react";

import Endereco from "../../components/accounts/AccountsFormAddress";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";

import FormDadosPessoais from "../../components/accounts/AccountsFormPersonalData";
import AccountInfo from "../../components/accounts/AccountInfo";
import FormCartao from "../../components/accounts/AccountsFormCard";
import NavTeste from "../../components/Testes/NavTeste";
import { useParams } from "react-router-dom";

const AccountsAccountDetail = () => {

  return (
    <>
  
        <AccountInfo />
        <FormDadosPessoais />
        <Endereco name="Endereço" />
     
    </>
  );
};

export default AccountsAccountDetail;
