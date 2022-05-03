import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/NavAccount";

import FormCartao from "../../components/FormCartao";
import FormAddress from "../../components/FormAddress";
import AccountInfo from "../../components/AccountInfo";

const CardDetail = () => {
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

export default CardDetail;
