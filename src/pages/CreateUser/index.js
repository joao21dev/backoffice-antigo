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
    firstName: "",
    lastName: "",
    age: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios({
    //     method: "post",
    //     url: "https://omssxfdlgh.execute-api.us-east-1.amazonaws.com/users/add",
    //     // dataType: "jsonp",
    //     headers: {
    //       "Content-Type": "application/json",
    //       // "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify({
    //       firstName: formValue.firstName,
    //       lastName: formValue.lastName,
    //       age: formValue.age,
    //       // password: formValue.password,
    //       // client_id: "902d1cd8-0834-4b92-4b92-8e6e-6a58bf758db",
    //     }),
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
    // fetch(
    //   "https://omssxfdlgh.execute-api.us-east-1.amazonaws.com/users/create",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       name: formValue.name,
    //       email: formValue.email,
    //       phone: formValue.phone,
    //       password: formValue.password,
    //       client_id: "902d1cd8-0834-4b92-4b92-8e6e-6a58bf758db",
    //     }),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then(console.log);
    fetch("https://omssxfdlgh.execute-api.us-east-1.amazonaws.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        age: formValue.age,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
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
    <>
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
          <FormControl id="firstName">
            <FormLabel>Nome</FormLabel>
            <Input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formValue.firstName}
              maxLength={14}
            />
          </FormControl>
          <FormControl id="lastName">
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              onChange={handleChange}
              name="lastName"
              value={formValue.lastName}
            />
          </FormControl>
          <FormControl id="age">
            <FormLabel>Telefone</FormLabel>
            <Input
              type="number"
              onChange={handleChange}
              name="age"
              value={formValue.age}
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
    </>
  );
};

export default UsersCreate;
