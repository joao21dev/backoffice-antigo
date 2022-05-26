import React from "react";

import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

import { Link } from "react-router-dom";

const PermissionsCreate = () => {
  return (
    <SidebarWithHeader>
      <Box
        fontWeight="medium"
        p="6"
        boxShadow="md"
        borderRadius="15px"
        m="15px"
        bg="white"
        h="50%"
        color="black"
      >
        <Text w="90%" fontSize="25px" fontWeight="semibold">
          Criar Permissões
        </Text>

        <FormControl mt="2%">
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="name">
              Nome
            </FormLabel>
            <Box>
              <Input id="name" type="text" />
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="active">
              Ativa?
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="accounts">
              Contas
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="compras">
              Compras
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="cashout">
              Saques
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="payments">
              Pagamentos
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="PIX">
              Trabsferência PIX
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="TED">
              TransferÊncia TED
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="P2P">
              Transferência P2P
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="plans">
              Planos
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="fares">
              Tarifas
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="agency">
              Agências
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="settings">
              Configurações
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="terms">
              Termos e Política
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
            </Box>
          </Box>
          <Box mb="15px" display="flex">
            <FormLabel w="140px" htmlFor="Users">
              Usuários
            </FormLabel>
            <Box>
              <Checkbox size="lg"></Checkbox>
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
          <Link to="/users-detail">Criar Permissões</Link>
        </Box>
      </Flex>
    </SidebarWithHeader>
  );
};

export default PermissionsCreate;
