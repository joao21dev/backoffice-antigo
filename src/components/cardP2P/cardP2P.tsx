import {
  Box,
  Center,
  Text,
  Stack,

} from "@chakra-ui/react";

import { BiTransfer } from "react-icons/bi";

export default function Pricing() {
  return (
    <Center>
      <Box w={"full"}>
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Box
            display="flex"
            bg="#c4b0ff"
            h="80px"
            w="80px"
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
          >
            <BiTransfer fontSize="35px" color="#5932EA" display="flex" />
          </Box>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text mt="3" fontSize={"md"}>
              P2P
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Text fontSize={"xl"} fontWeight={600}>R$</Text>
            <Text fontSize={"xl"} fontWeight={600}>
              26k
            </Text>
          </Stack>
          <Stack >
            <Text fontSize={"sm"}  >
              -28%
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
