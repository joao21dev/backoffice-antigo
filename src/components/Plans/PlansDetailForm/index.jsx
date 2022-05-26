import React, { useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const PlansDetailForm = () => {
  const [plan, setPlan] = useState(true);
  const handlePlan = () => {
    setPlan(!plan);
  };
  if (plan) {
    return (
      <>
        <Text mb="5%" w="90%" fontSize="25px" fontWeight="bold">
          Criar Plano
        </Text>{" "}
        <Box
          fontWeight="medium"
          p="6"
          boxShadow="md"
          borderRadius="15px"
          mt="15px"
          bg="white"
          h="60%"
          color="black"
        >
          <Flex>
            <Text w="90%" fontSize="25px" fontWeight="semibold">
              Detalhes do Plano
            </Text>
          </Flex>

          <FormControl mt="2%">
            <Box h="50px" display="flex">
              <FormLabel w="140px" htmlFor="name">
                Nome do Plano
              </FormLabel>
              <Box>
                <Input id="name" type="text" />
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="140px" htmlFor="active">
                Plano ativo?
              </FormLabel>
              <Box>
                <Checkbox>Pessoa Física</Checkbox>
                <Text fontWeight="100" fontSize="10px">
                  Se marcado, habilita plano para seleção.
                </Text>
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="140px" htmlFor="bonus">
                Benefícios
              </FormLabel>
              <Box>
                <Input id="bonus" type="text" />
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="140px" htmlFor="description">
                Descrição
              </FormLabel>
              <Box>
                <Input id="description" type="text" />
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="140px" htmlFor="avaliable">
                Disponibilidade
              </FormLabel>
              <RadioGroup>
                <Stack direction="row">
                  <Radio value="1">Pessoa Física</Radio>
                  <Radio value="2">Pessoa Jurídica</Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Text mt="4%" w="90%" fontSize="25px" fontWeight="semibold">
              Tarifas
            </Text>
            <Box mt="2%" h="50px" display="flex">
              <FormLabel w="10%" htmlFor="value">
                Valor Mensal
              </FormLabel>
              <Box>
                <Input placeholder="R$ Valor Mensal" id="value" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  Este valor será debitado automaticamente da conta do portador
                  final, mensalmente.
                </Text>
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="10%" htmlFor="pix">
                PIX
              </FormLabel>
              <Box>
                <Input placeholder="R$ PIX" id="pix" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  Valor por transação debitado somente de contas PJ
                </Text>
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="10%" htmlFor="ted">
                TED
              </FormLabel>
              <Box>
                <Input placeholder="R$ TED" id="ted" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  Valor por transação.
                </Text>
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="10%" htmlFor="boleto">
                Boleto
              </FormLabel>
              <Box>
                <Input placeholder="R$ Boleto" id="boleto" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  Valor por boleto, cobrada na liquidação.
                </Text>
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="10%" htmlFor="saque">
                Saque
              </FormLabel>
              <Box>
                <Input placeholder="R$ Saque" id="saque" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  valor por saque
                </Text>
              </Box>
            </Box>
            <Text mt="4%" w="90%" fontSize="25px" fontWeight="semibold">
              Gratuidades
            </Text>
            <Box mt="2%" h="50px" display="flex">
              <FormLabel w="10%" htmlFor="ted">
                TED
              </FormLabel>
              <Box>
                <Input placeholder="R$ TED" id="ted" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  Valor por transação.
                </Text>
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="10%" htmlFor="boleto">
                PIX Gratuitos
              </FormLabel>
              <Box>
                <Input placeholder="Pix gratuitoso" id="boleto" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  Quantidade de transferências PIX que o usuário pode realizar
                  gratuitamente.
                </Text>
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="10%" htmlFor="saque">
                TED Gratuitos
              </FormLabel>
              <Box>
                <Input placeholder="TED gratuitos" id="saque" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  Quantidade de transferências TED que o usuário pode realizar
                  gratuitamente.
                </Text>
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="10%" htmlFor="saque">
                Boletos Gratuitos
              </FormLabel>
              <Box>
                <Input placeholder="Boletos gratuitos" id="saque" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  Quantidade de Boletos que o usuário pode emitir gratuitamente.
                </Text>
              </Box>
            </Box>
            <Text mt="4%" w="90%" fontSize="25px" fontWeight="semibold">
              Configurações
            </Text>
            <Box mt="2%" h="70px" display="flex">
              <FormLabel w="10%" htmlFor="ted">
                Período Grátis (dias)
              </FormLabel>
              <Box>
                <Input placeholder="30 dias" id="ted" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  A corança será feita depois desse período.
                </Text>
              </Box>
            </Box>
            <Box h="50px" display="flex">
              <FormLabel w="10%" htmlFor="boleto">
                Tempo máximo de inadimplência (dias)
              </FormLabel>
              <Box w="17.5%">
                <Input placeholder="30 dias" id="boleto" type="text" />
                <Text fontWeight="100" fontSize="10px">
                  Após o encerramento do período do tempo máximo de
                  inadimplência definida neste campo o usuário será
                  automaticamente desvinculado do plano. As mensagens em atraso
                  continuam pendentes e serão cobradas quando houver crédito na
                  conta devedora.
                </Text>
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
            <Link to="/plan-detail">Criar Plano</Link>
          </Box>
        </Flex>
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

export default PlansDetailForm;
