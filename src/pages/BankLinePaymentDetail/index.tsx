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

const BankLinePaymentDetail = () => {
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
        <Box
          fontWeight="medium"
          p="2"
          boxShadow="md"
          borderRadius="15px"
          m="15px"
          bg="white"
          h="50%"
          color="black"
        >
          <Text mb="5" w="90%" fontWeight="semibold">
            Detalhes do Pagamento
          </Text>
          <Text m="2">Conta:</Text>
          <Text m="2">Código de Barras:</Text>
          <Text m="2">Tipo:</Text>
          <Text m="2">Valor:</Text>

          <Text m="2">Descrição:</Text>
          <Text m="2">Vencimento:</Text>
          <Text m="2">Data Limite de Pagamento:</Text>
          <Text m="2">Status:</Text>
          <Text m="2">Data:</Text>
        </Box>
      </SidebarWithHeader>
    </>
  );
};

export default BankLinePaymentDetail;
