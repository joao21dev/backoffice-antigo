import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

const BankLineBoletosDetail = () => {
  return (
    <>
      {" "}
      <SidebarWithHeader>
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
        <Text fontSize="20px" fontWeight="semibold">
          Detalhes do Boleto
        </Text>
        <Box
          fontWeight="medium"
          p="2"
          boxShadow="md"
          borderRadius="15px"
          mt="15px"
          bg="white"
          h="50%"
          color="black"
        >
          <Text mb="5"                       w="90%" fontWeight="semibold">
            Detalhes do Boleto
          </Text>
          <Text m="2">ID Conta:</Text>
          <Text m="2">Tipo:</Text>
          <Text m="2">Valor da Agência:</Text>
          <Text m="2">Conta:</Text>
          <Text m="2">Código de Barras:</Text>
          <Text m="2">Status:</Text>
          <Text m="2">Data de Emissão:</Text>
          <Text m="2">Data de Vencimento:</Text>
        </Box>
      </SidebarWithHeader>
    </>
  );
};

export default BankLineBoletosDetail;
