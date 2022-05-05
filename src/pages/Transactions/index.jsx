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

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import TableWrapper from "../../components/tableWrapper";
import { dataTransactions } from "../../dataTables";

export default function Transactions() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transações",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Detalhe",
            accessor: "detail",
          },
          {
            Header: "Tipo da Transação",
            accessor: "typeTransaction",
          },
          {
            Header: "Tipo",
            accessor: "type",
          },
          {
            Header: "Valor",
            accessor: "money",
          },
          {
            Header: "Status",
            accessor: "status",
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
            <CustomTable columns={columns} data={dataTransactions} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
