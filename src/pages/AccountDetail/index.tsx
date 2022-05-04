import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import Endereco from "../../components/FormAddress";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/NavAccount";

import FormDadosPessoais from "../../components/FormPersonalData";
import AccountInfo from "../../components/AccountInfo";
import FormCartao from "../../components/FormCartao";

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
