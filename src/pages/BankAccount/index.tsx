import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/NavAccount";
import FormBankAccount from "../../components/FormBankAccount";
import AccountInfo from "../../components/AccountInfo";

const BankAccount = () => {
  return (
    <>
      <SidebarWithHeader>
        <NavAccount></NavAccount>
        <AccountInfo />

        <FormBankAccount />
      </SidebarWithHeader>
    </>
  );
};

export default BankAccount;
