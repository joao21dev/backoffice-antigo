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
} from "@chakra-ui/react";
import React from "react";
import NavAccountItem from "../NavAccountItems";



const NavAccount = () => {
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
        h="55px"
        bg="white"
        templateColumns="repeat(8, 1fr)"
        boxShadow="md"
      >
        <NavAccountItem to={"accounts-account-detail"} name={"Dados Pessoais"} />
        <NavAccountItem to={"account-documents"} name={"Documentos"} />
        <NavAccountItem to={"account-cards"} name={"Cartões"} />
        <NavAccountItem to={"account-transactions"} name={"Transações"} />
        <NavAccountItem to={"account-bank-account"} name={"Conta Bancária"} />
        <NavAccountItem to={"account-devices"} name={"Dispositivos"} />
        <NavAccountItem to={"account-activities"} name={"Atividades"} />
        <NavAccountItem to={"account-partners"} name={"Sócios"} />
      </Grid>
    </>
  );
};

export default NavAccount;
