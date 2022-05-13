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
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AccountsFormPersonalData = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const fetchData = async () => {
    const response = await axios
      .get(`https://627d18c1e5ac2c452afcfcd2.mockapi.io/user/${id}`)
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data;

      console.log("Data: ", data);
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [personalData, setPersonalData] = useState(true);
  const handleEditPersonalData = () => {
    setPersonalData(!personalData);
  };


  if (personalData) {
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
            onClick={handleEditPersonalData}
            rightIcon={<FiEdit2 />}
          >
            Edtar
          </Button>
        </Flex>
        {/* <Text m="2">Nome:</Text>
        <Text m="2">Documento:</Text>
        <Text m="2">Telefone:</Text>
        <Text m="2">Data de Nascimento:</Text>
        <Text m="2">Nome da Mãe:</Text>
        <Text m="2">Nome da Mãe:</Text>
        <Text m="2">Renda Mensal:</Text>
        <Text m="2">Agência Digital:</Text> */}
         <Text m="2">ID: {data.id}</Text>
        <Text m="2">Nome: {data.client_id}</Text>
        <Text m="2">E-mail: {data.email}</Text>
        <Text m="2">Telefone de Nascimento: {data.name}</Text>
        <Text m="2">Data de Nascimento: {data.phone}</Text>
        <Text m="2">Cidade: {data.city}</Text>
        <Text m="2">Sexo: {data.gender}</Text>
        <Flex>
          <Text w="20%" m="2">
            Plano: {data.planType}
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
          onClick={handleEditPersonalData}
          colorScheme="green"
          rightIcon={<FiSave />}
        >
          Salvar
        </Button>
      </Flex>
      <FormControl mt="2%">
        <Box display="flex">
          <FormLabel  w='10%' htmlFor="nome">Nome</FormLabel>
          <Input id="nome" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel  w='10%' htmlFor="documento">Documento</FormLabel>
          <Input id="documento" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel  w='10%' htmlFor="telefone">Telefone</FormLabel>
          <Input id="telefone" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel  w='10%' htmlFor="dataNascimento">Email</FormLabel>
          <Input id="dataNascimento" type="date" />
        </Box>
        <Box display="flex">
          <FormLabel  w='10%' htmlFor="nomeMae">Nome da Mãe</FormLabel>
          <Input id="nomeMae" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel  w='10%' htmlFor="nomePai">Nome do Pai</FormLabel>
          <Input id="nomePai" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel  w='10%' htmlFor="rendaMensal">Renda Mensal</FormLabel>
          <Input id="email" type="rendaMEnsal" />
        </Box>
        <Box display="flex">
          <FormLabel  w='10%' htmlFor="ageniaDigital">Agência Digital</FormLabel>
          <Input id="agenciaDigital" type="text" />
        </Box>
        <Flex>
          <Box w="30%" display="flex">
            <FormLabel  w='10%' htmlFor="email">Plano</FormLabel>
            <Input id="plano" type="text" />
          </Box>
          <Flex>
            <FormLabel  w='10%' htmlFor="dataAssinatura">Assinatura</FormLabel>
            <Input id="dataAssinatura" type="date" />
          </Flex>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default AccountsFormPersonalData;
