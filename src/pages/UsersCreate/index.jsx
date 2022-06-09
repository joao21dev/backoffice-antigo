import React from "react";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import SidebarWithHeader from "../../components/Sidebar/sidebar";

const UsersCreate = () => {
  return (
    <SidebarWithHeader>
      <Text w="90%" fontSize="25px" fontWeight="semibold">
        Usuários
      </Text>
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

        <FormControl mt="2%">
          <Box display="flex">
            <FormLabel w="140px" htmlFor="name">
              Nome
            </FormLabel>
            <Box>
              <Input id="name" type="text" />
            </Box>
          </Box>
          <Box display="flex">
            <FormLabel w="140px" htmlFor="email">
              E-mail
            </FormLabel>
            <Box>
              <Input id="email" type="text" />
            </Box>
          </Box>
          <Box display="flex">
            <FormLabel w="140px" htmlFor="password">
              Senha
            </FormLabel>
            <Box>
              <Input id="password" type="text" />
            </Box>
          </Box>
          <Box display="flex">
            <FormLabel w="140px" htmlFor="type">
              Tipo
            </FormLabel>
            <Box w="260px">
              <Select size="lg" placeholder="Selecione">
                <option value="administrador">Administrador</option>
                <option value="suporte">Suporte</option>
                <option value="financeiro">Financeiro</option>
              </Select>
            </Box>
          </Box>
        </FormControl>
      </Box>
      <Flex justifyContent="flex-end">
        <Box
          fontWeight="semibold"
          color="white"
          borderRadius="15px"
          p="4"
          m="4"
          bg="#5A32EA"
          alignItems="center"
          align="center"
          w="200px"
        >
          <Link to="/users-detail">Criar Tarifa</Link>
        </Box>
      </Flex>
    </SidebarWithHeader>
  );
};

export default UsersCreate;
