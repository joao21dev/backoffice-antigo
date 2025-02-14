import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { config } from "../../core/config";
import api from "../../services/api";
import { theme } from "../../theme/theme";
import {  useNavigate } from "react-router-dom"


export default function SimpleCard() {
  const navigate = useNavigate()
 
  const [formValue, setformValue] = useState({
    document: "",
    password: "",
  });

  const handleSubmit = async () => {
    const data = {
      email: formValue.document,
      password: formValue.password,
      clientId: config.clientId,
    };
    try {
      await api
        .post("/backoffice/login",data)
        .then((res) => {
          if(res.data.access_token){
            localStorage.setItem('access_token', res.data.access_token)
            localStorage.setItem('user.name', res.data.name)
            navigate("/home");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    localStorage.clear()
  },[])
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
            <Image src={'logo.png'}/>
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={theme.LoginColor.backgroundForm[0]}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form>
              <FormControl id="document">
                <FormLabel>E-mail</FormLabel>
                <Input
                  onChange={handleChange}
                  type="email"
                  name="document"
                  value={formValue.document}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input
                  onChange={handleChange}
                  name="password"
                  value={formValue.password}
                  type="password"
                />
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
                <Button
                  onClick={()=>handleSubmit()}
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
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
