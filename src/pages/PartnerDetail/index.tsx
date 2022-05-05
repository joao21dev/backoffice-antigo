import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import FormPersonalData from "../../components/accounts/FormPersonalData";
import AccountInfo from "../../components/accounts/AccountInfo";
import FormAddress from "../../components/accounts/FormAddress";

const PartnerDetail = () => {
  return (
    <>
      <SidebarWithHeader>
        <NavAccount></NavAccount>
        <AccountInfo />

        <FormPersonalData />
        <FormAddress name="Endereço" />
      </SidebarWithHeader>
    </>
  );
};

export default PartnerDetail;
