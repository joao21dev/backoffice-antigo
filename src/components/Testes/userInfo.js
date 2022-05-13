import {
  Text,
  Button,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit2, FiSave } from "react-icons/fi";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const fetchData = async () => {
    const response = await axios
      .get(`https://dummyjson.com/users/${id}`)
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data;

      console.log("Data: ", data);
      console.log("Name: ", data.firstName);
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
            // onClick={handleEditPersonalData}
            // onClick={putTest}
            rightIcon={<FiEdit2 />}
          >
            Edtar
          </Button>
        </Flex>
        <Text m="2">ID: {data.id}</Text>
        <Text m="2">Nome: {data.firstName}</Text>
        <Text m="2">E-mail: {data.email}</Text>
        <Text m="2">Telefone de Nascimento: {data.name}</Text>
        <Text m="2">Data de Nascimento: {data.phone}</Text>
        <Text m="2">Cidade: {data.ip}</Text>
        <Text m="2">Sexo: {data.gender}</Text>
        <Flex>
          <Text w="20%" m="2">
            Plano: {data.bloodGroup}
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
          <FormLabel htmlFor="id">ID</FormLabel>
          <Input id="id" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input id="nome" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input id="email" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="phone">phone</FormLabel>
          <Input id="phone" type="text" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="city">Cidade</FormLabel>
          <Input id="city" type="date" />
        </Box>
        <Box display="flex">
          <FormLabel htmlFor="gender">Sexo</FormLabel>
          <Input id="gender" type="text" />
        </Box>
      </FormControl>
    </Box>
  );
};

export default UserInfo;
