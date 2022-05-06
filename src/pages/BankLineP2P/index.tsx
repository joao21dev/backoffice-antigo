import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import TableWrapper from "../../components/tableWrapper";
import { dataAccountTransactions, dataBanklineP2P } from "../../dataTables";

export default function BankLineP2P() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transferência P2P",
        columns: [
          {
            Header: "Conta de Origem",
            accessor: "accountFrom",
          },
          {
            Header: "Conta de Destino",
            accessor: "accountTo",
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
            Header: "Data e Hora",
            accessor: "time",
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
        {" "}
        <TableWrapper>
          <ChakraProvider>
            <CustomTable columns={columns} data={dataBanklineP2P} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
