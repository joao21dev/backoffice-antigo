import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

const Terms = () => {
  return (
    <>
      <SidebarWithHeader>
        <Text w="90%" fontSize="25px" fontWeight="semibold">
          Termos e Políticas
        </Text>
        <Box
          fontWeight="medium"
          p="6"
          boxShadow="md"
          borderRadius="15px"
          m="15px"
          bg="white"
          h="500px"
          color="black"
        >
          <Text w="90%" fontSize="25px" fontWeight="medium">
            Termos de Uso
          </Text>
        </Box>
        <Flex justifyContent="flex-end">
          <Box
            fontWeight="semibold"
            color="white"
            borderRadius="15px"
            p="4"
            mx="4"
            bg="#5A32EA"
            alignItems="center"
            align="center"
            w="200px"
          >
            <Link to="/plan-detail">Salvar</Link>
          </Box>
        </Flex>

        <Box
          fontWeight="medium"
          p="6"
          boxShadow="md"
          borderRadius="15px"
          m="15px"
          bg="white"
          h="500px"
          color="black"
        >
          <Text w="90%" fontSize="25px" fontWeight="medium">
            Política de Privaciade
          </Text>

          <Text w="90%" fontSize="25px"></Text>
        </Box>
        <Flex justifyContent="flex-end">
        <Box
          fontWeight="semibold"
          color="white"
          borderRadius="15px"
          p="4"
          mx="4"
          bg="#5A32EA"
          alignItems="center"
          align="center"
          w="200px"
        >
          <Link to="/plan-detail">Salvar</Link>
        </Box>
      </Flex>
      </SidebarWithHeader>
    </>
  );
};

export default Terms;
