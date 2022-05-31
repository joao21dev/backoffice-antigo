import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { theme } from "../../theme/theme";

export default function SimpleCard() {
  const [formValue, setformValue] = useState({
    document: "",
    password: "",
  });

  const handleSubmit = async () => {
    // const loginFormData = new FormData();
    // loginFormData.append("document", formValue.document);
    // loginFormData.append("password", formValue.password);

    try {
      const response = await axios({
        method: "post",
        url: "https://6294f2c163b5d108c1977aaf.mockapi.io/user",
        headers: { "Content-Type": "multipart/form-data" },
        body: JSON.stringify({
          document: "",
          password: "",
        }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
    console.log("testando o event: ", event.target.value);
    console.log("testando o formValue: ", formValue);
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={theme.LoginColor.background[0]}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={theme.LoginColor.fontBackground[0]}>
            Sua Marca
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={theme.LoginColor.backgroundForm[0]}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id="document">
                <FormLabel>CNPJ</FormLabel>
                <Input
                  onChange={handleChange}
                  type="number"
                  name="document"
                  maxLength={14}
                  value={formValue.document}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input
                  onChange={handleChange}
                  name="password"
                  value={formValue.password}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Lembrar-me</Checkbox>
                  <Link color={"blue.400"}>Esqueceu a senha?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={theme.LoginColor.buttonColorBackground[0]}
                  color={theme.LoginColor.fontButton[0]}
                  justifyContent="center"
                  alignItems="center"
                  borderRadius={15}
                  p={1}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  <Text textAlign="center">Entrar</Text>
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
