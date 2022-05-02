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

const FormDadosPEssoais = () => {
  const [dadosPessoais, setDadosPessoais] = useState(true);
  const handleEditDadosPessoais = () => {
    setDadosPessoais(!dadosPessoais);
  };
  if (dadosPessoais) {
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
            onClick={handleEditDadosPessoais}
            rightIcon={<FiEdit2 />}
          >
            Edtar
          </Button>
        </Flex>
        <Text m="2">Nome:</Text>
        <Text m="2">Documento:</Text>
        <Text m="2">Telefone:</Text>
        <Text m="2">Data de Nascimento:</Text>
        <Text m="2">Nome da Mãe:</Text>
        <Text m="2">Nome da Mãe:</Text>
        <Text m="2">Renda Mensal:</Text>
        <Text m="2">Agência Digital:</Text>
        <Flex>
          <Text w="20%" m="2">
            Plano:
          </Text>
          <Text m="2">Data de Assinatura:</Text>
        </Flex>
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
          onClick={handleEditDadosPessoais}
          colorScheme="green"
          rightIcon={<FiSave />}
        >
          Salvar
        </Button>
      </Flex>
      <FormControl mt="2%">
        <Box display="flex">
          <FormLabel htmlFor="nome">Nome</FormLabel>
          <Input id="nome" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="documento">Documento</FormLabel>
          <Input id="documento" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="telefone">Telefone</FormLabel>
          <Input id="telefone" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="dataNascimento">Email</FormLabel>
          <Input id="dataNascimento" type="date" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="nomeMae">Nome da Mãe</FormLabel>
          <Input id="nomeMae" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="nomePai">Nome do Pai</FormLabel>
          <Input id="nomePai" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="rendaMensal">Renda Mensal</FormLabel>
          <Input id="email" type="rendaMEnsal" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="ageniaDigital">Agência Digital</FormLabel>
          <Input id="agenciaDigital" type="text" />
        </Box>
        <Flex>
          <Box w="30%" display="flex">
            <FormLabel htmlFor="email">Plano</FormLabel>
            <Input id="plano" type="text" />
          </Box>
          <Flex>
            <FormLabel htmlFor="dataAssinatura">Assinatura</FormLabel>
            <Input id="dataAssinatura" type="date" />
          </Flex>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default FormDadosPEssoais;
