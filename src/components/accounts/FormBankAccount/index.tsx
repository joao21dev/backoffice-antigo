import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiEdit2, FiSave } from "react-icons/fi";

const FormBankAccount = () => {
  return (
    <>
      {" "}
      <Box
        fontWeight="medium"
        p="2"
        boxShadow="md"
        borderRadius="15px"
        mt="15px"
        bg="white"
        h="50%"
        color="black"
      >
        <Text m="2">Banco:</Text>
        <Text m="2">Agência:</Text>
        <Text m="2">Digito da Agência:</Text>
        <Text m="2">Conta:</Text>
        <Text m="2">Dígio Conta:</Text>
        <Text m="2">Tipo de conta:</Text>
        <Text m="2">Status:</Text>
      </Box>
    </>
  );
};

export default FormBankAccount;
