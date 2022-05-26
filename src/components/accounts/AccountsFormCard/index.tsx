import React, { useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { FiEdit2, FiSave } from "react-icons/fi";

const AccountsFormCard = () => {
  const [cartao, setCartao] = useState(true);
  const handleEditCartao = () => {
    setCartao(!cartao);
  };
  if (cartao) {
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
          <Flex>
            <Text w="90%" fontWeight="semibold">
              Cartão:
            </Text>
            <Button
              bg="#F29339"
              colorScheme="#F29339"
              color="white"
              fontSize="12px"
              fontWeight="semibold"
              onClick={handleEditCartao}
              rightIcon={<FiEdit2 />}
            >
              Edtar
            </Button>
          </Flex>

          <Text m="2">Número:</Text>
          <Text m="2">Status:</Text>
          <Text m="2">Tipo:</Text>
          <Text m="2">Código de rastreio:</Text>
        </Box>
      </>
    );
  } else {
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
            Cartão
          </Text>
          <Button
            bg="green"
            color="white"
            fontSize="12px"
            fontWeight="semibold"
            onClick={handleEditCartao}
            colorScheme="green"
            rightIcon={<FiSave />}
          >
            Salvar
          </Button>
        </Flex>
        <FormControl mt="2%">
          <Box display="flex">
            <FormLabel w="10%" htmlFor="numero">
              Número
            </FormLabel>
            <Input id="numero" type="text" />
          </Box>
          <Box display="flex">
            <FormLabel w="10%" htmlFor="status">
              Status
            </FormLabel>
            <Input id="status" type="text" />
          </Box>
          <Box display="flex">
            <FormLabel w="10%" htmlFor="tipo">
              Tipo
            </FormLabel>
            <Input id="tipo" type="text" />
          </Box>
          <Box display="flex">
            <FormLabel w="10%" htmlFor="codigoRastreio">
              Código de Rastreio
            </FormLabel>
            <Input id="codigoRastreio" type="text" />
          </Box>
        </FormControl>
      </Box>
    );
  }
};

export default AccountsFormCard;
