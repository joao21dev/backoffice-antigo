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
  Image,
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
            <Image src="./logoPix.eps" color="#32BCAD" display="flex" />
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
