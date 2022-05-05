import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import Endereco from "../../components/accounts/AccountsFormAddress";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";

import FormDadosPessoais from "../../components/accounts/AccountsFormPersonalData";
import AccountInfo from "../../components/accounts/AccountInfo";
import FormCartao from "../../components/accounts/AccountsFormCard";

const AccountDetail = () => {
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

export default AccountDetail;
