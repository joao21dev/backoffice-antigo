import { Box, Text } from "@chakra-ui/react";
import React from "react";

const AccountInfo = () => {
  return (
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
  );
};

export default AccountInfo;
