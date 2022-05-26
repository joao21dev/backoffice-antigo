import React, { useState } from "react";

import { Flex, Grid, Text } from "@chakra-ui/react";
import AccountsAccountDetail from "../AccountDetail";
import AccountDocuments from "../AccountDocuments";
import AccountCards from "../AccountCards";
import AccountTransactions from "../AccountTransactions";
import AccountBankAccounts from "../AccountBankAccounts";
import AccountDevices from "../AccountDevices";
import AccountActivities from "../AccountActivities";
import AccountPartners from "../AccountPartners";


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
          bg={personalData && "#5A32EA"}
          color={personalData && "white"}
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
          bg={documents && "#5A32EA"}
          color={documents && "white"}
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
          bg={cards && "#5A32EA"}
          color={cards && "white"}
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
          bg={transactions && "#5A32EA"}
          color={transactions && "white"}
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
          bg={bankAccount && "#5A32EA"}
          color={bankAccount && "white"}
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
          bg={devices && "#5A32EA"}
          color={devices && "white"}
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
          bg={activities && "#5A32EA"}
          color={activities && "white"}
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
          bg={partners && "#5A32EA"}
          color={partners && "white"}
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
