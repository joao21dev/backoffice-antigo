import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
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
    personalData === true ? setPersonalData(false) : setPersonalData(true);
  };
  const [documents, setDocuments] = useState(false);
  const handleDocuments = () => {
    documents === true ? setDocuments(false) : setDocuments(true);
  };
  const [cartões, setCartões] = useState(false);
  const handleCartões = () => {
    cartões === true ? setCartões(false) : setCartões(true);
  };
  const [transações, setTransações] = useState(false);
  const handleTransações = () => {
    transações === true ? setTransações(false) : setTransações(true);
  };
  const [bankAccount, setBankAccount] = useState(false);
  const handleBankAccount = () => {
    bankAccount === true ? setBankAccount(false) : setBankAccount(true);
  };
  const [devices, setDevices] = useState(false);
  const handleDevices = () => {
    devices === true ? setDevices(false) : setDevices(true);
  };
  const [atividades, setAtividades] = useState(false);
  const handleAtividades = () => {
    atividades === true ? setAtividades(false) : setAtividades(true);
  };
  const [socios, setSocios] = useState(false);
  const handleSocios = () => {
    socios === true ? setSocios(false) : setSocios(true);
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
      {personalData && <AccountDetail />}
      {documents && <Documents />}
      {cartões && <Cards />}
      {transações && <Transactions />}
      {bankAccount && <BankAccount />}
      {devices && <Devices />}
      {atividades && <Activities />}
      {socios && <AccountDetail />}
    </>
  );
};

export default NavAccount;
