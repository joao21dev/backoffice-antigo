import { Box, Flex, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
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
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
};

export default UserInfo;
