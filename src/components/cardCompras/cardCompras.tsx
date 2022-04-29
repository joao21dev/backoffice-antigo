import {
  Box,
  Center,
  Text,
  Stack,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";


export default function Pricing() {
  return (
    <Center>
      <Box w={"full"}>
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Box
            display="flex"
            bg="#cfdcf9"
            h="80px"
            w="80px"
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
          >
            <FiShoppingCart fontSize="35px" color="#3575FF" display="flex" />
          </Box>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text mt="3" fontSize={"md"}>
              COMPRAS
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Text fontSize={"xl"} fontWeight={600}>R$</Text>
            <Text fontSize={"xl"} fontWeight={600}>
              200k
            </Text>
          </Stack>
          <Stack >
            <Text fontSize={"sm"}  >
              +13%
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
