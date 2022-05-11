import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AccountInfo = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log('O id é:', id)

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
    <>
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
        <Text m="2">Id Conta: {data.id}</Text>
        <Text m="2">Data de abertura: {data.birthDate}</Text>
        <Text m="2">Data de última atualização: {data.birthDate}</Text>
        
      </Box>
    </>
  );
};

export default AccountInfo;
