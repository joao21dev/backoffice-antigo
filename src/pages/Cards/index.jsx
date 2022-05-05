import {
  Flex,
  Box,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { SettingsIcon } from "@chakra-ui/icons";

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { Link } from "react-router-dom";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import { columnsCards, dataCards } from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";

export default function Cards() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Cartões",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Número",
            accessor: "number",
          },
          {
            Header: "Tipo",
            accessor: "type",
          },
          {
            Header: "Data de Ativação",
            accessor: "date",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Visulaizar",
            accessor: "open",
          },
          {
            Header: "",
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
        <NavAccount />
        <TableWrapper>
          <ChakraProvider>
            <CustomTable columns={columns} data={dataCards} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
