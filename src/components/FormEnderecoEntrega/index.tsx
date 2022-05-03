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

const FormEnderecoEntrega = () => {
  const [enderecoEntrega, setEnderecoEntrega] = useState(true);
  const handleEditEnderecoEntrega = () => {
    setEnderecoEntrega(!enderecoEntrega);
  };

  if (enderecoEntrega) {
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
            Endereço de Entrega
          </Text>
          <Button
            bg="#F29339"
            colorScheme="#F29339"
            color="white"
            fontSize="12px"
            fontWeight="semibold"
            onClick={handleEditEnderecoEntrega}
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
            Endereço de Entrega
          </Text>
          <Button
            bg="green"
            color="white"
            fontSize="12px"
            fontWeight="semibold"
            onClick={handleEditEnderecoEntrega}
            colorScheme="green"
            rightIcon={<FiSave />}
          >
            Salvar
          </Button>
        </Flex>
        <FormControl mt="2%">
          <Box display="flex">
            <FormLabel htmlFor="rua">Rua</FormLabel>
            <Input id="rua" type="text" />
          </Box>
          <Box display="flex">
            <FormLabel htmlFor="numero">Número</FormLabel>
            <Input id="numero" type="text" />
          </Box>
          <Box display="flex">
            <FormLabel htmlFor="complemento">Complemento</FormLabel>
            <Input id="complemento" type="text" />
          </Box>
          <Box display="flex">
            <FormLabel htmlFor="cep">CEP</FormLabel>
            <Input id="cep" type="text" />
          </Box>
          <Box display="flex">
            <FormLabel htmlFor="bairro">Bairro</FormLabel>
            <Input id="bairro" type="text" />
          </Box>
          <Box display="flex">
            <FormLabel htmlFor="estado">Estado</FormLabel>
            <Input id="estado" type="text" />
          </Box>
        </FormControl>
      </Box>
    );
  }
};

export default FormEnderecoEntrega;
