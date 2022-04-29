import {
  Box,
  Center,
  Text,
  Stack,
} from "@chakra-ui/react";

import { RiBankLine } from "react-icons/ri";


export default function Pricing() {
  return (
    <Center>
      <Box w={"full"}>
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Box
            display="flex"
            bg="#fcb6a4"
            h="80px"
            w="80px"
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
          >
            <RiBankLine fontSize="35px" color="#FF0000" display="flex" />
          </Box>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text mt="3" fontSize={"md"}>
              TED
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Text fontSize={"xl"} fontWeight={600}>R$</Text>
            <Text fontSize={"xl"} fontWeight={600}>
              87.2K
            </Text>
          </Stack>
          <Stack >
            <Text fontSize={"sm"}  >
              +47%
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
