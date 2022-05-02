import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const FormEnderecoEntrega = () => {
  return (
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
      <Flex>
        <Text w="90%" fontWeight="semibold">
          Endereço de Entrega
        </Text>
        <Button fontSize="12px" fontWeight="semibold">
          Edtar
        </Button>
        <Button fontSize="12px" fontWeight="semibold">
          Salvar
        </Button>
      </Flex>

      <Text m="2">Rua:</Text>
      <Text m="2">Número:</Text>
      <Text m="2">Complemento:</Text>
      <Text m="2">CEP:</Text>
      <Text m="2">Bairro:</Text>
      <Text m="2">Cidade:</Text>
      <Text m="2">Estado:</Text>
    </Box>
  );
};

export default FormEnderecoEntrega;
