import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/NavAccount";
import { Link } from "react-router-dom";

const Cartao = () => {
  return (
    <>
   
      <SidebarWithHeader>
        <NavAccount></NavAccount>
        <Link to='/accounts/cartao-detail'>Detalhe do cartao</Link>
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
          <Text m="2">Id Conta</Text>
          <Text m="2">Data de abertura</Text>
          <Text m="2">Data de última atualização</Text>
        </Box>

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
              Cartão:
            </Text>
            <Button fontSize="12px" fontWeight="semibold">
              Edtar
            </Button>
            <Button fontSize="12px" fontWeight="semibold">
              Salvar
            </Button>
          </Flex>

          <Text m="2">Número:</Text>
          <Text m="2">Status:</Text>
          <Text m="2">Tipo:</Text>
          <Text m="2">Código de rastreio de Nascimento:</Text>
        </Box>

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
              Endereço de Entrega
            </Text>
            <Button fontSize="12px" fontWeight="semibold">
              Edtar
            </Button>
            <Button fontSize="12px" fontWeight="semibold">
              Salvar
            </Button>
          </Flex>

          <Text m="2">Rua:</Text>
          <Text m="2">Número:</Text>
          <Text m="2">Complemento:</Text>
          <Text m="2">CEP:</Text>
          <Text m="2">Bairro:</Text>
          <Text m="2">Cidade:</Text>
          <Text m="2">Estado:</Text>
        </Box>
      </SidebarWithHeader>
    </>
  );
};

export default Cartao;
