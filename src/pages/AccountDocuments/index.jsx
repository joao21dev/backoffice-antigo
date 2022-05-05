import {
  Flex,
  Box,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  ChakraProvider,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { SettingsIcon } from "@chakra-ui/icons";
import { AiFillEye } from "react-icons/ai";

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import { dataAccountDocuments, dataDocuments } from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";

export default function AccountDocuments() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Documentos",
        columns: [
          {
            Header: <Checkbox></Checkbox>,
            accessor: "box",
          },
          {
            Header: "Tipo de Documento",
            accessor: "documentType",
          },
          {
            Header: "Formato",
            accessor: "format",
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
            Header: "Vizualizar",
            accessor: "open",
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
            <CustomTable columns={columns} data={dataAccountDocuments} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
