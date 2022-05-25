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

import BankLineBoletos from "../../../pages/BankLineBoletos";
import BanklineCards from "../../../pages/BankLineCards";
import BankLineCashouts from "../../../pages/BanklineCashouts";
import BankLineCompras from "../../../pages/BankLineCompras";
import BankLineP2P from "../../../pages/BankLineP2P";
import BankLinePix from "../../../pages/BankLinePix";
import BankLineTed from "../../../pages/BankLineTed";
import Plans from "../../../pages/Plans";

const NavBankline = () => {
  const [boletos, setBoletos] = useState(true);
  const [banklineCards, setBanklineCards] = useState(false);
  const [compras, setCards] = useState(false);
  const [cashouts, setCashouts] = useState(false);
  const [pix, setPix] = useState(false);
  const [p2p, setP2p] = useState(false);
  const [ted, setTed] = useState(false);
  const [plans, setPlans] = useState(false);

  const handleBoletos = () => {
    setBoletos(!boletos);
    setBanklineCards(false);
    setCards(false);
    setCashouts(false);
    setP2p(false);
    setPix(false);
    setTed(false);
    setPlans(false);
  };
  const handleBanklineCards = () => {
    setBoletos(false);
    setBanklineCards(!banklineCards);
    setCards(false);
    setCashouts(false);
    setP2p(false);
    setPix(false);
    setTed(false);
    setPlans(false);
  };
  const handleCompras = () => {
    setBoletos(false);
    setBanklineCards(false);
    setCards(!compras);
    setCashouts(false);
    setP2p(false);
    setPix(false);
    setTed(false);
    setPlans(false);
  };
  const handleCashouts = () => {
    setBoletos(false);
    setBanklineCards(false);
    setCards(false);
    setCashouts(!cashouts);
    setP2p(false);
    setPix(false);
    setTed(false);
    setPlans(false);
  };
  const handlePix = () => {
    setBoletos(false);
    setBanklineCards(false);
    setCards(false);
    setCashouts(false);
    setP2p(false);
    setPix(!pix);
    setTed(false);
    setPlans(false);
  };
  const handleP2p = () => {
    setBoletos(false);
    setBanklineCards(false);
    setCards(false);
    setCashouts(false);
    setP2p(!p2p);
    setPix(false);
    setTed(false);
    setPlans(false);
  };
  const handleTed = () => {
    setBoletos(false);
    setBanklineCards(false);
    setCards(false);
    setCashouts(false);
    setP2p(false);
    setPix(false);
    setTed(!ted);
    setPlans(false);
  };
  const handlePlans = () => {
    setBoletos(false);
    setBanklineCards(false);
    setCards(false);
    setCashouts(false);
    setP2p(false);
    setPix(false);
    setTed(false);
    setPlans(!plans);
  };
  return (
    <>
      {" "}
      <Text mb="2%" w="90%" fontSize="25px" fontWeight="bold">
        Bankline
      </Text>
      <Grid
        borderRadius="15px"
        h="55px"
        bg="white"
        templateColumns="repeat(7, 1fr)"
        boxShadow="md"
      >
        <Flex
          bg={boletos && "#5A32EA"}
          color={boletos && "white"}
          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="md"
          
          role="group"
          onClick={handleBoletos}
          _hover={{
            bg: "#5A32EA",
            color: "white",
            
          }}
        >
          <Text borderRadius="15px">Boletos</Text>
        </Flex>
        <Flex
          bg={banklineCards && "#5A32EA"}
          color={banklineCards && "white"}
          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleBanklineCards}
          _hover={{
            bg: "#5A32EA",
            color: "white",
          }}
        >
          <Text borderRadius="15px">Cartões</Text>
        </Flex>
        <Flex
          bg={compras && "#5A32EA"}
          color={compras && "white"}

          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleCompras}
          _hover={{
            bg: "#5A32EA",
            color: "white",
          }}
        >
          <Text borderRadius="15px">Compras</Text>
        </Flex>
        <Flex
          bg={cashouts && "#5A32EA"}
          color={cashouts && "white"}

          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleCashouts}
          _hover={{
            bg: "#5A32EA",
            color: "white",
          }}
        >
          <Text borderRadius="15px">Saques</Text>
        </Flex>
        <Flex
          bg={pix && "#5A32EA"}
          color={pix && "white"}

          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handlePix}
          _hover={{
            bg: "#5A32EA",
            color: "white",
          }}
        >
          <Text borderRadius="15px">Transferência Pix</Text>
        </Flex>
        <Flex
          bg={p2p && "#5A32EA"}
          color={p2p && "white"}

          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleP2p}
          _hover={{
            bg: "#5A32EA",
            color: "white",
          }}
        >
          <Text borderRadius="15px">Transferência P2P</Text>
        </Flex>
        <Flex
          bg={ted && "#5A32EA"}
          color={ted && "white"}

          p="4"
          cursor="pointer"
          fontWeight="medium"
          justifyContent="center"
          alignItems="center"
          align="center"
          borderRadius="lg"
          role="group"
          onClick={handleTed}
          _hover={{
            bg: "#5A32EA",
            color: "white",
          }}
        >
          <Text borderRadius="15px">Transferência Ted</Text>
        </Flex>
      </Grid>
      {boletos && <BankLineBoletos />}
      {banklineCards && <BanklineCards />}
      {compras && <BankLineCompras />}
      {cashouts && <BankLineCashouts />}
      {pix && <BankLinePix />}
      {p2p && <BankLineP2P />}
      {ted && <BankLineTed />}
    </>
  );
};

export default NavBankline;
