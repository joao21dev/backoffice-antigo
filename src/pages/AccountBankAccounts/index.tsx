import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import FormBankAccount from "../../components/accounts/InfoBankAccount";
import AccountInfo from "../../components/accounts/AccountInfo";

const AccountBankAccounts = () => {
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

export default AccountBankAccounts;
