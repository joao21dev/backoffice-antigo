import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import AccountsCardEdit from "./components/accounts/AccountsCardEdit";

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
      <Link to="/accounts-account-detail">
        <Box ml="20%">
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
      <Link to="/accounts-account-detail">
        <Box ml="25%">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
    change: (
      <Box display="flex" justifyContent="space-around">
        <FaTrashAlt color={"gray"} />
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
        <Box ml="20%">
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
      <Link to="/account-partner-detail">
        <Box ml="25%">
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
      <Link to="/account-card-detail">
        <Box ml="20%">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
    edit: (
      <Box display="flex">
        <AccountsCardEdit />
      </Box>
    ),
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
      <Link to="/bankline-boleto-detail">
        <Box ml="25%">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
  },
];
export const dataBanklineCards = [
  {
    box: <Checkbox></Checkbox>,
    number: "4766**********4623",
    titular: "Carlos Ivan",
    type: "Físico",
    date: "12/01/2022",
    status: (
      <Box borderRadius={15} bg="green">
        <Text color={"white"} textAlign="center">
          Ativo
        </Text>
      </Box>
    ),
    open: (
      <Link to="/bankline-card-detail">
        <Box ml="10px">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
    edit: (
      <Box display="flex">
        <AccountsCardEdit />
      </Box>
    ),
  },
];
export const dataBanklineCompras = [
  {
    box: <Checkbox></Checkbox>,
    number: "4766**********4623",
    titular: "Carlos Ivan",
    money: "R$ 100,00",
    type: "Físico",
    date: "12/01/2022",
    status: (
      <Box borderRadius={15} bg="green">
        <Text color={"white"} textAlign="center">
          Autorizada
        </Text>
      </Box>
    ),
    open: (
      <Link to="/bankline-card-detail">
        <Box ml="10px">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
  },
];
export const dataBanklineCashouts = [
  {
    box: <Checkbox></Checkbox>,
    account: "Carlos Ivan",
    money: "R$ 50,00",
    description: "Loja",
    number: "4766**********4623",
    date: "12/01/2022",
    status: (
      <Box borderRadius={15} bg="green">
        <Text color={"white"} textAlign="center">
          Autorizada
        </Text>
      </Box>
    ),
    open: (
      <Link to="/bankline-card-detail">
        <Box ml="10px">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
  },
];
export const dataBanklinePayments = [
  {
    box: <Checkbox></Checkbox>,
    account: "Carlos Ivan",
    money: "R$ 100,00",
    type: "Físico",

    date: "12/01/2022",
    status: (
      <Box borderRadius={15} bg="#e5818a">
        <Text color={"red"} textAlign="center">
          Recusada
        </Text>
      </Box>
    ),
    open: (
      <Link to="/bankline-payment-detail">
        <Box ml="10px">
          <AiFillEye color={"gray"} fontSize="22px" />
        </Box>
      </Link>
    ),
  },
];
export const dataBanklineP2P = [
  {
    box: <Checkbox></Checkbox>,
    accountFrom: "Carlos Ivan",
    accountTo: "João Pedro",
    type: (
      <Box borderRadius={15} textAlign="center" bg="#E8EEFC">
        <Text color="#1D54E1">TARIFA</Text>
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
export const dataBanklinePix = [
  {
    box: <Checkbox></Checkbox>,
    account: "Carlos Ivan",
    payer: "João Pedro",
    bankAccount: "AG: 0001, Conta: 11302518-2",
    typeTransaction: (
      <Box borderRadius={15} textAlign="center" bg="#E8EEFC">
        <Text color="#1D54E1">ENTRADA</Text>
      </Box>
    ),
    direction: (
      <Box borderRadius={15} textAlign="center" bg="#E8EEFC">
        <Text color="#1D54E1">CRÉDITO</Text>
      </Box>
    ),
    money: "R$ 60,00",
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
export const dataBanklineTed = [
  {
    box: <Checkbox></Checkbox>,
    account: "Carlos Ivan",
    payer: "João Pedro",
    bankAccount: "AG: 0001, Conta: 11302518-2",
    type: (
      <Box borderRadius={15} textAlign="center" bg="#E8EEFC">
        <Text color="#1D54E1">ENTRADA</Text>
      </Box>
    ),
    money: "R$ 60,00",
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
// export const dataBankLineCards = [
//   {
//     box: <Checkbox></Checkbox>,
//     number: "4766**********4623",
//     titular: "Carlos Ivan",
//     type: "Físico",
//     date: "12/01/2022",
//     status: (
//       <Box borderRadius={15} w="60%" bg="green">
//         <Text color={"white"} textAlign="center">
//           Ativo
//         </Text>
//       </Box>
//     ),
//     open: (
//       <Link to="bankline-card-detail">
//         <Box ml="10px">
//           <AiFillEye color={"gray"} fontSize="22px" />
//         </Box>
//       </Link>
//     ),
//     change: <SettingsIcon color={"gray"} />,
//   },
// ];
