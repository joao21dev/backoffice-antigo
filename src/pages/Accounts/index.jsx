import {
  Flex,
  Box,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  ChakraProvider,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { RiEditFill } from "react-icons/ri";
import { SettingsIcon } from "@chakra-ui/icons";

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { Link } from "react-router-dom";
import { CustomTable } from "../../components/Table";
import { columnsAccounts, dataAccounts } from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";

export default function Accounts() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Contas",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "ID Conta",
            accessor: "id",
          },
          {
            Header: "Nome",
            accessor: "name",
          },
          {
            Header: "E-mail",
            accessor: "email",
          },
          {
            Header: "Documento",
            accessor: "document",
          },
          {
            Header: "Saldo",
            accessor: "money",
          },
          {
            Header: "Data",
            accessor: "date",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Sobre",
            accessor: "open",
          },
          {
            Header: "Excluir/Editar",
            accessor: "change",
          },
        ],
      },
    ],
    []
  );
  return (
    <>
      <SidebarWithHeader>
        <TableWrapper>
          <ChakraProvider>
            <CustomTable columns={columns} data={dataAccounts} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
