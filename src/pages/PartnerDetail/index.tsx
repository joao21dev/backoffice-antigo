import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/NavAccount";
import FormPersonalData from "../../components/FormPersonalData";
import AccountInfo from "../../components/AccountInfo";
import FormAddress from "../../components/FormAddress";

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
