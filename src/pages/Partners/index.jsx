import {
  Flex,
  Box,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  ChakraProvider,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { Link } from "react-router-dom";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import {
  columnsActivities,
  columnsPartners,
  dataActivities,
  dataPartners,
} from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";

export default function Partners() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Sócios",
        columns: [
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
            Header: "Relacionamento",
            accessor: "relationship",
          },
          {
            Header: "Data e Hora",
            accessor: "time",
          },
          {
            Header: "Visualizar",
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
        <TableWrapper>
          <ChakraProvider>
            <CustomTable columns={columns} data={dataPartners} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
