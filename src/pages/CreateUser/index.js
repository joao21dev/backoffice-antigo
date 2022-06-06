import React, { useState } from "react";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  Button,
} from "@chakra-ui/react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { theme } from "../../theme/theme";
import axios from "axios";

const UsersCreate = () => {
  const [formValue, setformValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "https://omssxfdlgh.execute-api.us-east-1.amazonaws.com/users/create",
        dataType: "jsonp",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: {
          name: formValue.name,
          email: formValue.email,
          phone: formValue.phone,
          password: formValue.password,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // fetch("", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name: formValue.name,
    //           email: formValue.email,
    //           phone: formValue.phone,
    //           password: formValue.password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then(console.log);
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
    console.log("o event é: ", event);
    console.log("o formValue é: ", formValue);
  };

  return (
    <SidebarWithHeader>
      <Text w="90%" fontSize="25px" fontWeight="semibold">
        Usuários
      </Text>
      <form>
        <Box
          fontWeight="medium"
          p="6"
          boxShadow="md"
          borderRadius="15px"
          mt="15px"
          bg="white"
          h="50%"
          color="black"
        >
          <Text w="90%" fontSize="25px" fontWeight="semibold">
            Criar Usuário
          </Text>
          <FormControl id="name">
            <FormLabel>Nome</FormLabel>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              value={formValue.name}
              maxLength={14}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              onChange={handleChange}
              name="email"
              value={formValue.email}
            />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Telefone</FormLabel>
            <Input
              type="number"
              onChange={handleChange}
              name="phone"
              value={formValue.phone}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              onChange={handleChange}
              name="password"
              value={formValue.password}
            />
          </FormControl>
        </Box>
        <Flex justifyContent="flex-end">
          <Button
            type="submit"
            bg={theme.LoginColor.buttonColorBackground[0]}
            color={theme.LoginColor.fontButton[0]}
            justifyContent="center"
            alignItems="center"
            borderRadius={15}
            p={1}
            onClick={handleSubmit}
            _hover={{
              bg: "blue.500",
            }}
          >
            <Text textAlign="center">Entrar</Text>
          </Button>
        </Flex>
      </form>
    </SidebarWithHeader>
  );
};

export default UsersCreate;
