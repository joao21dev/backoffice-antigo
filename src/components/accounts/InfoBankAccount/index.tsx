import { Box, Text } from "@chakra-ui/react";

const InfoBankAccount = () => {
  return (
    <>
      {" "}
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
        <Text m="2">Banco:</Text>
        <Text m="2">Agência:</Text>
        <Text m="2">Digito da Agência:</Text>
        <Text m="2">Conta:</Text>
        <Text m="2">Dígio Conta:</Text>
        <Text m="2">Tipo de conta:</Text>
        <Text m="2">Status:</Text>
      </Box>
    </>
  );
};

export default InfoBankAccount;
