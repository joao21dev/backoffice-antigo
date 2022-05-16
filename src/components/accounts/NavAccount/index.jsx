import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AccountActivities from "../../../pages/AccountActivities";
import AccountBankAccounts from "../../../pages/AccountBankAccounts";
import AccountCards from "../../../pages/AccountCards";
import AccountsAccountDetail from "../../../pages/AccountDetail";
import AccountDevices from "../../../pages/AccountDevices";
import AccountDocuments from "../../../pages/AccountDocuments";
import AccountPartners from "../../../pages/AccountPartners";
import AccountTransactions from "../../../pages/AccountTransactions";
import BankInfoStat from "../BankInfoStat";

const NavAccount = () => {
  const [personalData, setPersonalData] = useState(true);
  const [documents, setDocuments] = useState(false);
  const [cards, setCards] = useState(false);
  const [transactions, setTransactions] = useState(false);
  const [bankAccount, setBankAccount] = useState(false);
  const [devices, setDevices] = useState(false);
  const [activities, setActivities] = useState(false);
  const [partners, setPartners] = useState(false);

  const handlePersonalData = () => {
    setPersonalData(!personalData);
    setDocuments(false);
    setCards(false);
    setTransactions(false);
    setDevices(false);
    setBankAccount(false);
    setActivities(false);
    setPartners(false);
  };
  const handleDocuments = () => {
    setPersonalData(false);
    setDocuments(!documents);
    setCards(false);
    setTransactions(false);
    setDevices(false);
    setBankAccount(false);
    setActivities(false);
    setPartners(false);
  };
  const handleCards = () => {
    setPersonalData(false);
    setDocuments(false);
    setCards(!cards);
    setTransactions(false);
    setDevices(false);
    setBankAccount(false);
    setActivities(false);
    setPartners(false);
  };
  const handleTransactions = () => {
    setPersonalData(false);
    setDocuments(false);
    setCards(false);
    setTransactions(!transactions);
    setDevices(false);
    setBankAccount(false);
    setActivities(false);
    setPartners(false);
  };
  const handleBankAccount = () => {
    setPersonalData(false);
    setDocuments(false);
    setCards(false);
    setTransactions(false);
    setDevices(false);
    setBankAccount(!bankAccount);
    setActivities(false);
    setPartners(false);
  };
  const handleDevices = () => {
    setPersonalData(false);
    setDocuments(false);
    setCards(false);
    setTransactions(false);
    setDevices(!devices);
    setBankAccount(false);
    setActivities(false);
    setPartners(false);
  };
  const handleActivities = () => {
    setPersonalData(false);
    setDocuments(false);
    setCards(false);
    setTransactions(false);
    setDevices(false);
    setBankAccount(false);
    setActivities(!activities);
    setPartners(false);
  };
  const handlePartners = () => {
    setPersonalData(false);
    setDocuments(false);
    setCards(false);
    setTransactions(false);
    setDevices(false);
    setBankAccount(false);
    setActivities(false);
    setPartners(!partners);
  };
  return (
    <>
      {" "}
      <Grid
        borderRadius="15px"
        h="55px"
        bg="white"
        templateColumns="repeat(8, 1fr)"
        boxShadow="md"
      >
        <Flex
          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handlePersonalData}
        >
          <Text borderRadius="15px">Dados Pessoais</Text>
        </Flex>
        <Flex
          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleDocuments}
        >
          <Text borderRadius="15px">Documentos</Text>
        </Flex>
        <Flex
          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleCards}
        >
          <Text borderRadius="15px">Cartões</Text>
        </Flex>
        <Flex
          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleTransactions}
        >
          <Text borderRadius="15px">Transações</Text>
        </Flex>
        <Flex
          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleBankAccount}
        >
          <Text borderRadius="15px">Conta Bancária</Text>
        </Flex>
        <Flex
          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleDevices}
        >
          <Text borderRadius="15px">Dispositivos</Text>
        </Flex>
        <Flex
          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleActivities}
        >
          <Text borderRadius="15px">Atividades</Text>
        </Flex>
        <Flex
          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handlePartners}
        >
          <Text borderRadius="15px">Sócios</Text>
        </Flex>
      </Grid>
      {personalData && <AccountsAccountDetail />}
      {documents && <AccountDocuments />}
      {cards && <AccountCards />}
      {transactions && <AccountTransactions />}
      {bankAccount && <AccountBankAccounts />}
      {devices && <AccountDevices />}
      {activities && <AccountActivities />}
      {partners && <AccountPartners />}
    </>
  );
};

export default NavAccount;
