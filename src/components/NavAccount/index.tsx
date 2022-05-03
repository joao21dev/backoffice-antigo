import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AccountDetail from "../../pages/AccountDetail";
import Activities from "../../pages/Activities";
import BankAccount from "../../pages/BankAccount";
import CardDetail from "../../pages/CardDetail";
import Cards from "../../pages/Cards";
import Devices from "../../pages/Devices";
import Documents from "../../pages/Documents";
import Partners from "../../pages/Partners";
import Transactions from "../../pages/Transactions";
import NavAccountItem from "../NavAccountItems";
import NavItemWrapper from "../NavItemWrapper";
import SidebarWithHeader from "../Sidebar/sidebar";

const NavAccount = () => {
  const [personalData, setPersonalData] = useState(false);
  const handlePersonalData = () => {
    setPersonalData(true);
  };
  const [documents, setDocuments] = useState(false);
  const handleDocuments = () => {
    setDocuments(true);
  };
  const [cartões, setCartões] = useState(false);
  const handleCartões = () => {
    setCartões(true);
  };
  const [transações, setTransações] = useState(false);
  const handleTransações = () => {
    setTransações(true);
  };
  const [bankAccount, setBankAccount] = useState(false);
  const handleBankAccount = () => {
    setBankAccount(true);
  };
  const [devices, setDevices] = useState(false);
  const handleDevices = () => {
    setDevices(true);
  };
  const [atividades, setAtividades] = useState(false);
  const handleAtividades = () => {
    setAtividades(true);
  };
  const [socios, setSocios] = useState(false);
  const handleSocios = () => {
    setSocios(true);
  };
  return (
    <>
      {" "}
      <Box justifyContent="flex-end" display="flex">
        <Flex
          bg="white"
          w="224px"
          h="51px"
          mb="15"
          boxShadow="md"
          borderRadius="15px"
        >
          <Center mx="1" borderLeftRadius="15px">
            <StatGroup>
              <Stat>
                <StatLabel color="#F29339" fontWeight="normal">
                  Agência Digital
                </StatLabel>
                <StatHelpText fontWeight="bold" textAlign="center">
                  1001
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Center>

          <Center>
            <Divider orientation="vertical" />
          </Center>

          <Center mx="1" borderRightRadius="15px">
            <StatGroup>
              <Stat>
                <StatLabel color="#5B93FF" fontWeight="normal">
                  Saldo disponível
                </StatLabel>
                <StatHelpText fontWeight="bold" textAlign="center">
                  R$ 1.120,00
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Center>
        </Flex>
      </Box>
      <Grid
        borderRadius="15px"
        h="51px"
        bg="white"
        templateColumns="repeat(8, 1fr)"
        boxShadow="md"
      >
        <GridItem onClick={handlePersonalData} w="100%" borderRadius="15px">
          <NavItemWrapper name="Dados Pessoais" />
        </GridItem>
        <GridItem onClick={handleDocuments} w="100%" borderRadius="15px">
          <NavItemWrapper name="Documentos" />
        </GridItem>
        <GridItem onClick={handleCartões} w="100%" borderRadius="15px">
          <NavItemWrapper name="Cartões" />
        </GridItem>
        <GridItem onClick={handleTransações} w="100%" borderRadius="15px">
          <NavItemWrapper name="Transações" />
        </GridItem>
        <GridItem onClick={handleBankAccount} w="100%" borderRadius="15px">
          <NavItemWrapper name="Conta Bancária" />
        </GridItem>
        <GridItem onClick={handleDevices} w="100%" borderRadius="15px">
          <NavItemWrapper name="Dispositivos" />
        </GridItem>
        <GridItem onClick={handleAtividades} w="100%" borderRadius="15px">
          <NavItemWrapper name="Atividades" />
        </GridItem>
        <GridItem onClick={handleSocios} w="100%" borderRadius="15px">
          <NavItemWrapper name="Sócios" />
        </GridItem>
      </Grid>
      {personalData ? <AccountDetail  /> : <CardDetail /> }
      {/* {documents ? <Documents /> : <Contas />}
      {cartões ? <Cards /> : <Contas />}
      {transações ? <Transactions /> : <Contas />}
      {bankAccount ? <BankAccount /> : <Contas />}
      {devices ? <Devices /> : <Contas />}
      {atividades ? <Activities /> : <Contas />}
      {socios ? <Partners /> : <Contas />} */}
    </> 
  );
};

export default NavAccount;
