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

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { Link } from "react-router-dom";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import { columnsDevices, dataAccountDevices, dataDevices } from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";

export default function AccountDevices() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Dispositivos",
        columns: [
          {
            Header: "ID Dispositivo",
            accessor: "id",
          },
          {
            Header: "Verificado",
            accessor: "verified",
          },
          {
            Header: "Tipo",
            accessor: "type",
          },
          {
            Header: "Fabricante",
            accessor: "fabricante",
          },
          {
            Header: "Modelo",
            accessor: "model",
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
            <CustomTable columns={columns} data={dataAccountDevices} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
