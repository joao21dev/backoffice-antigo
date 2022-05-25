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
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  fetchUsersInfo } from "../../../redux";

const AccountsFormAddress = (props) => {
  const userData = useSelector((state) => state.userInfo.usersInfo);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUsersInfo(id));
  }, [dispatch]);
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
        <Text m="2">Rua: {userData.address && userData.address.address}</Text>
        <Text m="2">Número: {userData.height}</Text>
        <Text m="2">Complemento: </Text>
        <Text m="2">
          CEP: {userData.address && userData.address.postalCode}
        </Text>
        <Text m="2">Bairro: {userData.hair && userData.hair.type}</Text>
        <Text m="2">Cidade: {userData.address && userData.address.city}</Text>
        <Text m="2">Estado: {userData.address && userData.address.state}</Text>
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

export default AccountsFormAddress;
