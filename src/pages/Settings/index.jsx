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

const Settings = () => {
  return (
    <>
      <SidebarWithHeader>
        <Text mb="2%" w="90%" fontSize="25px" fontWeight="bold">
          Configurações
        </Text>{" "}
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
          <FormControl>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="name">
                Nome do Banco
              </FormLabel>
              <Box>
                <Input id="name" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="slogan">
                Slogan
              </FormLabel>
              <Box>
                <Input id="slogan" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="companyName">
                Razão Social
              </FormLabel>
              <Box>
                <Input id="companyName" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="cnpj">
                CNPJ
              </FormLabel>
              <Box>
                <Input id="cnpj" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="address">
                Endereço
              </FormLabel>
              <Box>
                <Input id="address" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="email">
                E-mail
              </FormLabel>
              <Box>
                <Input id="email" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="motherAccount">
                Conta Mãe
              </FormLabel>
              <Box>
                <Input id="motherAccount" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="site">
                Site
              </FormLabel>
              <Box>
                <Input id="site" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="phone">
                Telefone
              </FormLabel>
              <Box>
                <Input id="phone" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="applestore">
                Link Applestore
              </FormLabel>
              <Box>
                <Input id="applestore" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="playstore">
                Link PlayStore
              </FormLabel>
              <Box>
                <Input id="playstore" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="firstColor">
                Cor Primária
              </FormLabel>
              <Box>
                <Input id="firstColor" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="secondColor">
                Cor Secundária
              </FormLabel>
              <Box>
                <Input id="secondColor" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="linkedin">
                Linkedin
              </FormLabel>
              <Box>
                <Input id="linkedin" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="facebook">
                Facebook
              </FormLabel>
              <Box>
                <Input id="facebook" type="text" />
              </Box>
            </Box>
            <Box mb="15px" display="flex">
              <FormLabel w="140px" htmlFor="instagram">
                Instagram
              </FormLabel>
              <Box>
                <Input id="instagram" type="text" />
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
            <Link to="/plan-detail">Salvar</Link>
          </Box>
        </Flex>
      </SidebarWithHeader>
    </>
  );
};

export default Settings;
