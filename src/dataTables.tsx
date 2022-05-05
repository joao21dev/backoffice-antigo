import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const dataAccountDocuments = [
  {
    box: <Checkbox></Checkbox>,
    documentType: "Carteira de Identidade - Frente",
    format: "Imagem",
    date: "17/03/2022",
    status: (
      <Box borderRadius={15} w="60%" bg="green">
        <Text color={"white"} textAlign="center">
          Ativo
        </Text>
      </Box>
    ),
    trash: <SettingsIcon color={"gray"} />,
    open: (
      <Link to="/accounts/account-detail">
        <Box ml="26px">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
  },
];

export const dataAccounts = [
  {
    box: <Checkbox></Checkbox>,
    id: "1",
    name: "Test",
    email: "text@test.com",
    document: "text",
    money: 0,
    date: "17/03/2022",
    status: (
      <Box borderRadius={15} bg="green">
        <Text color={"white"} textAlign="center">
          Ativo
        </Text>
      </Box>
    ),
    trash: <SettingsIcon color={"gray"} />,
    open: (
      <Link to="/account-detail">
        <Box ml="10px">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
    change: (
      <Box display="flex" justifyContent="space-around">
        <FaTrashAlt color={"gray"} />
        <RiEditFill color={"gray"} />
      </Box>
    ),
  },
];

export const dataAccountDevices = [
  {
    box: <Checkbox></Checkbox>,
    id: "123423423423749878",
    verified: (
      <Box
        borderRadius={15}
        w="60%"
        textAlign="center"
        color="#1D54E1"
        bg="#E8EEFC"
      >
        SIM
      </Box>
    ),
    type: "IOS",

    fabricante: <Box>Apple</Box>,
    model: "Iphone",

    open: (
      <Link to="/account-detail">
        <Box ml="10px">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
  },
];

export const dataAccountActivities = [
  {
    box: <Checkbox></Checkbox>,
    user: "Conta: Carlos Ivan",
    ip: "200.128.15.130",
    description: "created",
    time: "17/03/2022 16:10:58",
  },
];

export const dataAccountPartners = [
  {
    box: <Checkbox></Checkbox>,
    name: "Conta: Carlos Ivan",
    email: "carlosivan@gmail.com",
    document: "1233829732",
    relationship: "Administrador",
    time: "17/03/2022 16:10:58",
    open: (
      <Link to="/partner-detail">
        <Box ml="10px">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
  },
];

export const dataAccountCards = [
  {
    box: <Checkbox></Checkbox>,
    number: "4766**********4623",
    type: "Físico",
    date: "12/01/2022",
    status: (
      <Box borderRadius={15} w="60%" bg="green">
        <Text color={"white"} textAlign="center">
          Ativo
        </Text>
      </Box>
    ),
    open: (
      <Link to="/card-detail">
        <Box ml="10px">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
    change: <SettingsIcon color={"gray"} />,
  },
];

export const dataAccountTransactions = [
  {
    box: <Checkbox></Checkbox>,
    detail: "123423423423749878",
    typeTransaction: (
      <Box borderRadius={15} textAlign="center" bg="#E8EEFC">
        <Text color="#1D54E1">PIX RECEBIDO</Text>
      </Box>
    ),
    type: (
      <Box borderRadius={15} w="60%" bg="#e5f7ed">
        <Text color={"red"} textAlign="center">
          DÉBITO
        </Text>
      </Box>
    ),
    money: "R$ 100,00",
    time: "17/03/2022 15:12:00",
    status: (
      <Box borderRadius={15} bg="#e5f7ed">
        <Text color={"green"} textAlign="center">
          PROCESSADA
        </Text>
      </Box>
    ),
  },
];

export const dataBanklineBoletos = [
  {
    box: <Checkbox></Checkbox>,
    account: "123423423423749878",
    typeTransaction: (
      <Box borderRadius={15} textAlign="center" bg="#E8EEFC">
        <Text color="#1D54E1">BOLETO COBRANÇA</Text>
      </Box>
    ),
    money: "R$ 100,00",
    time: "17/03/2022 15:12:00",
    status: (
      <Box borderRadius={15} bg="#e5f7ed">
        <Text color={"green"} textAlign="center">
          PROCESSADA
        </Text>
      </Box>
    ),
    open: (
      <Link to="/boleto-detail">
        <Box ml="10px">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
  },
];
