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
        <Box m={15} mt="5%">
          <Stack>
            {" "}
            <Flex>
              {" "}
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FiSearch color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Pesquisar"
                  bg="white"
                  borderRadius="15px"
                />
              </InputGroup>
            </Flex>
          </Stack>
        </Box>
      </Flex>
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
