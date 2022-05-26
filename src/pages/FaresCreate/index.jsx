import React, { useState } from "react";

import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
const FaresCreate = () => {
  const [plan, setPlan] = useState(true);
  const handlePlan = () => {
    setPlan(!plan);
  };
  if (plan) {
    return (
      <>
        <SidebarWithHeader>
          <Text mb="5%" w="90%" fontSize="25px" fontWeight="bold">
            Tarifas
          </Text>{" "}
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
              Criar Tarifa
            </Text>

            <FormControl mt="2%">
              <Box display="flex">
                <FormLabel w="140px" htmlFor="name">
                  Conta
                </FormLabel>
                <Box>
                  <Input id="name" type="text" />
                </Box>
              </Box>
              <Box display="flex">
                <FormLabel w="140px" htmlFor="description">
                  Descrição
                </FormLabel>
                <Box>
                  <Input id="description" type="text" />
                </Box>
              </Box>
              <Box display="flex">
                <FormLabel w="140px" htmlFor="value">
                  Valor
                </FormLabel>
                <Box>
                  <Input id="value" type="text" />
                </Box>
              </Box>
              <Box display="flex">
                <FormLabel w="140px" htmlFor="vencimento">
                  Vencimento
                </FormLabel>
                <Box>
                  <Input id="vencimento" type="text" />
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
              <Link to="/plan-detail">Criar Tarifa</Link>
            </Box>
          </Flex>
        </SidebarWithHeader>
      </>
    );
  } else {
    return (
      <>
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
          <Text w="90%" fontSize="25px" fontWeight="semibold">
            Detalhes do Plano:
          </Text>

          <Text m="2">Nome do Plano:</Text>
          <Flex>
            <Text m="2">Plano Ativo:</Text>
            <Checkbox value="1">Sim</Checkbox>
          </Flex>

          <Text m="2">Benefícios:</Text>
          <Text m="2">Descrição:</Text>
          <Box display="flex">
            <Text m="2">Disponibilidade:</Text>

            <Stack direction="row">
              <Checkbox value="1">Pessoa Física</Checkbox>
              <Checkbox value="2">Pessoa Jurídica</Checkbox>
            </Stack>
          </Box>
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
          <Text w="90%" fontSize="25px" fontWeight="semibold">
            Tarifas:
          </Text>

          <Text m="2">Valor Mensal:</Text>
          <Text m="2">PIXx:</Text>
          <Text m="2">TED:</Text>
          <Text m="2">Boleto:</Text>
          <Text m="2">Saque:</Text>
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
          <Text w="90%" fontSize="25px" fontWeight="semibold">
            Gratuidades:
          </Text>
          <Text m="2">PIX Gratuitos:</Text>
          <Text m="2">TED Gratuitos:</Text>
          <Text m="2">Boletos Gratuitos:</Text>{" "}
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
          <Text w="90%" fontSize="25px" fontWeight="semibold">
            Configurações:
          </Text>

          <Text m="2">Período Grátis (dias):</Text>
          <Text m="2">Tempo máximo de inadimplência (dias):</Text>
        </Box>
      </>
    );
  }
};

export default FaresCreate;
