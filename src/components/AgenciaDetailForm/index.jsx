import React from "react";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import SidebarWithHeader from "../Sidebar/sidebar";

import { Link } from "react-router-dom";

const AgenciaDetailForm = () => {
  return (
    <>
      <SidebarWithHeader>
        <Text mb="5%" w="90%" fontSize="25px" fontWeight="bold">
          Agências
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
          <Flex>
            <Text w="90%" fontSize="25px" fontWeight="semibold">
              Criar Agência
            </Text>
          </Flex>

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
              <FormLabel w="140px" htmlFor="description">
                Descrição
              </FormLabel>
              <Box>
                <Input id="description" type="text" />
              </Box>
            </Box>
            <Box display="flex">
              <FormLabel w="140px" htmlFor="avaliable">
                Ativa
              </FormLabel>
              <RadioGroup>
                <Stack direction="row">
                  <Radio value="1">Ativa</Radio>
                  <Radio value="2">Inativa</Radio>
                </Stack>
              </RadioGroup>
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
            <Link to="/agencia-detail">Criar Agência</Link>
          </Box>
        </Flex>
      </SidebarWithHeader>
    </>
  );
};

export default AgenciaDetailForm;
