import {
  Box,
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  color,
} from "@chakra-ui/react";
import { FiEdit2, FiSave } from "react-icons/fi";
import React, { useState } from "react";

const Endereco = () => {
  const [endereco, setEndereco] = useState(true);
  const handleEditEndereco = () => {
    setEndereco(!endereco);
  };
  if (endereco) {
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
            Dados pessoais
          </Text>
          <Button
            bg="#F29339"
            colorScheme="#F29339"
            color="white"
            fontSize="12px"
            fontWeight="semibold"
            onClick={handleEditEndereco}
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
          Dados pessoais
        </Text>
        <Button
          bg="green"
          color="white"
          fontSize="12px"
          fontWeight="semibold"
          onClick={handleEditEndereco}
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
};

export default Endereco;
