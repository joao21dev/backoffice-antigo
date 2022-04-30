import {
  Flex,
  Center,
  Text,
  Box,
  Badge,
  Divider,
  Stat,
  StatNumber,
  StatLabel,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FiArrowDown,
  FiArrowUp,
  FiDollarSign,
  FiUser,
  FiUserCheck,
} from "react-icons/fi";

const Cardbank = () => {
  const [valor, setValor] = useState("valor");

  return (
    <>
      <Flex  color="black" h="130px" m="15" boxShadow='lg' borderRadius="15px">
        
        <Center w="50%" bg="white" borderLeftRadius="15px">
          <Box
            display="flex"
            bg="green.200"
            h="50%"
            w="25%"
            justifyContent="center"
            alignItems="center"
            borderRadius="35px"
            
          >
            <FiDollarSign fontSize="35px" color="green" display="flex" />
          </Box>

          <Box ml="3">
            <StatGroup>
              <Stat>
                <StatLabel fontWeight="normal">Transações</StatLabel>
                <StatNumber>R$345,670</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Box>
        </Center>

        <Center>
          <Divider  orientation="vertical" />
        </Center>

        <Center w="50%" bg="white">
          <Box
            display="flex"
            bg="#C4B0FF"
            h="50%"
            w="25%"
            justifyContent="center"
            alignItems="center"
            borderRadius="35px"
          >
            <FiUser fontSize="35px" color="#5932EA" display="flex" />
          </Box>

          <Box ml="3">
            <StatGroup>
              <Stat>
                <StatLabel fontWeight="normal">Contas por Mês</StatLabel>
                <StatNumber>15</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  2%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Box>
        </Center>

        <Center>
          <Divider orientation="vertical" />
        </Center>

        <Center w="50%" bg="white" borderRightRadius="15px">
          <Box
            display="flex"
            bg="#FCB6A4"
            h="50%"
            w="25%"
            justifyContent="center"
            alignItems="center"
            borderRadius="35px"
          >
            <FiUserCheck fontSize="35px" color="#FF0000" display="flex" />
          </Box>

          <Box ml="3">
            <StatGroup>
              <Stat>
                <StatLabel fontWeight="normal">Contas Ativas</StatLabel>
                <StatNumber>89</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  11%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Box>
        </Center>
      </Flex>
    </>
  );
};

export default Cardbank;
