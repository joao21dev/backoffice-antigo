import React from "react";
import {
  Flex,
  Box,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  ChakraProvider,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const TableWrapper = (props: any) => {
  return (
    <>
      <Flex>
        <Box
          bg="white"
          borderRadius="15px"
          justifyContent="center"
          alignItems="center"
          m={4}
          w="150vw"
        >
          {props.children}
        </Box>
      </Flex>
    </>
  );
};

export default TableWrapper;
