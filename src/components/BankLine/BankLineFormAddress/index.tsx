import React, { useState } from "react";

import {
  Box,
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FiEdit2, FiSave } from "react-icons/fi";

const BankLineFormAddress = (props: any) => {
  const [address, setAddress] = useState(true);
  const handleEditAddress = () => {
    setAddress(!address);
  };
  if (address) {
    return (
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
        <Flex>
          <Text w="90%" fontWeight="semibold">
            {props.name}
          </Text>
          <Button
            bg="#F29339"
            colorScheme="#F29339"
            color="white"
            fontSize="12px"
            fontWeight="semibold"
            onClick={handleEditAddress}
            rightIcon={<FiEdit2 />}
          >
            Edtar
          </Button>
        </Flex>
        <Text m="2">Rua:</Text>
        <Text m="2">Número:</Text>
        <Text m="2">Complemento:</Text>
        <Text m="2">CEP:</Text>
        <Text m="2">Bairro:</Text>
        <Text m="2">Cidade:</Text>
        <Text m="2">Estado:</Text>
      </Box>
    );
  }
  return (
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
      <Flex>
        <Text w="90%" fontWeight="semibold">
          {props.name}
        </Text>
        <Button
          bg="green"
          color="white"
          fontSize="12px"
          fontWeight="semibold"
          onClick={handleEditAddress}
          colorScheme="green"
          rightIcon={<FiSave />}
        >
          Salvar
        </Button>
      </Flex>
      <FormControl mt="2%">
        <Box display="flex">
          <FormLabel w="10%" htmlFor="rua">
            Rua
          </FormLabel>
          <Input id="rua" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel w="10%" htmlFor="numero">
            Número
          </FormLabel>
          <Input id="numero" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel w="10%" htmlFor="complemento">
            Complemento
          </FormLabel>
          <Input id="complemento" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel w="10%" htmlFor="cep">
            CEP
          </FormLabel>
          <Input id="cep" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel w="10%" htmlFor="bairro">
            Bairro
          </FormLabel>
          <Input id="bairro" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel w="10%" htmlFor="estado">
            Estado
          </FormLabel>
          <Input id="estado" type="text" />
        </Box>
      </FormControl>
    </Box>
  );
};

export default BankLineFormAddress;
