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
import NavAccount from "../../components/accounts/NavAccount";

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import {
  columnsActivities,
  dataActivities,
  dataBanklineBoletos,
  dataBoletos,
} from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";

export default function BankLineBoletos() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Boletos",
        columns: [
          {
            Header: "Conta",
            accessor: "account",
          },
          {
            Header: "Tipo da Transação",
            accessor: "typeTransaction",
          },
          {
            Header: "Valor",
            accessor: "money",
          },

          {
            Header: "Data e Hora",
            accessor: "time",
          },
          {
            Header: "Status",
            accessor: "status",
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
    <SidebarWithHeader>
     
      <TableWrapper>
        <ChakraProvider>
          <CustomTable columns={columns} data={dataBanklineBoletos} />
        </ChakraProvider>
      </TableWrapper>
    </SidebarWithHeader>
  );
}
