import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AccountInfo = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log("O id em accounts info:", id);

  const fetchData = async () => {
    const response = await axios
      .get(`http://api-env.eba-p3jiv4uy.us-east-1.elasticbeanstalk.com/bank/accounts/1`)
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data;

      console.log("Data em accounts info ", data);
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
        <Text m="2">Id Conta: {data._id}</Text>
        <Text m="2">Data de abertura: {data.birthDate}</Text>
        <Text m="2">Data de última atualização: {data.birthDate}</Text>
      </Box>
    </>
  );
};

export default AccountInfo;
