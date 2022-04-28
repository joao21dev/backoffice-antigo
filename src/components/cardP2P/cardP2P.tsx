import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FiDollarSign } from "react-icons/fi";
import { FaRegMoneyBillAlt } from "react-icons/fa";

export default function Pricing() {
  return (
    <Center>
      <Box w={"full"}>
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Box
            display="flex"
            bg="#ebf1ff"
            h="80px"
            w="80px"
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
          >
            <FaRegMoneyBillAlt fontSize="35px" color="#32BCAD" display="flex" />
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
