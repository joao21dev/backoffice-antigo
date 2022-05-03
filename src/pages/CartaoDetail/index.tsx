import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";



import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/NavAccount";

import FormDadosPEssoais from "../../components/FormDadosPessoais";
import FormCartao from "../../components/FormCartao";
import FormEnderecoEntrega from "../../components/FormEnderecoEntrega";

const DadosPessoais = () => {

  return (
    <>
      <SidebarWithHeader>
        <NavAccount></NavAccount>
        <Box
          fontWeight="medium"
          p="2"
          boxShadow="md"
          borderRadius="15px"
          mt="15px"
          bg="white"
          h="140px"
          color="black"
        >
          <Text m="2">Id Conta</Text>
          <Text m="2">Data de abertura</Text>
          <Text m="2">Data de última atualização</Text>
        </Box>

        <FormCartao />
        <FormEnderecoEntrega />
      </SidebarWithHeader>
    </>
  );
};

export default DadosPessoais;
