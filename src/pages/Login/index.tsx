import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { theme } from "../../theme/theme";

export default function SimpleCard() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={theme.LoginColor.background[0]}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={theme.LoginColor.fontBackground[0]}>
            Sua Marca
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={theme.LoginColor.backgroundForm[0]}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>CNPJ</FormLabel>
              <Input type="number" maxLength={14} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Lembrar-me</Checkbox>
                <Link color={"blue.400"}>Esqueceu a senha?</Link>
              </Stack>
              <Link
                href="/home"
                bg={theme.LoginColor.buttonColorBackground[0]}
                color={theme.LoginColor.fontButton[0]}
                justifyContent="center"
                alignItems="center"
                borderRadius={15}
                p={1}
                _hover={{
                  bg: "blue.500",
                }}
              >
                <Text textAlign="center">Entrar</Text>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
