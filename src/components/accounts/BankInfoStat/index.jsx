import {
  Box,
  Center,
  Divider,
  Flex,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
} from "@chakra-ui/react";
import React from "react";

const BankInfoStat = () => {
  return (
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
  );
};

export default BankInfoStat;
