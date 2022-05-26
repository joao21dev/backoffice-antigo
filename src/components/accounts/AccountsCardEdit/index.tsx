import React, { useState } from "react";

import {
  Box,
  Center,
  Divider,
  Flex,
  Icon,
  Stat,
  StatGroup,
  StatLabel,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const AccountsCardEdit = () => {
  const [editPassword, setEditPassword] = useState(false);
  return (
    <>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        {editPassword ? (
          <Box justifyContent="flex-end" display="flex">
            <Flex
              bg="white"
              w="120px"
              h="120px"
              mb="15"
              boxShadow="md"
              borderRadius="15px"
            >
              <Center mx="1" borderLeftRadius="15px">
                <StatGroup>
                  <Stat>
                    <StatLabel color="#5B93FF" fontWeight="normal">
                      Alterar Senha de Operações
                    </StatLabel>
                    <Center>
                      <Divider orientation="horizontal" />
                    </Center>
                    <StatLabel color="#E71D36" fontWeight="normal">
                      Enviar Nova Senha por SMS
                    </StatLabel>
                  </Stat>
                </StatGroup>
              </Center>
            </Flex>
          </Box>
        ) : (
          <Icon
            as={BsThreeDots}
            onClick={() => setEditPassword(!editPassword)}
          />
        )}
      </Flex>
    </>
  );
};

export default AccountsCardEdit;
