import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import TableWrapper from "../../components/tableWrapper";
import { dataAccountTransactions, dataBanklineTed } from "../../dataTables";

export default function BankLineTed() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transferência TED",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Pagador/Recebedor",
            accessor: "payer",
          },
          {
            Header: "Conta Bancária",
            accessor: "bankAccount",
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
      <CustomTable columns={columns} data={dataBanklineTed} />
    </>
  );
}
