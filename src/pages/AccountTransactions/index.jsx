import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import TableWrapper from "../../components/tableWrapper";
import { dataAccountTransactions } from "../../dataTables";

export default function AccountTransactions() {
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

            <CustomTable columns={columns} data={dataAccountTransactions} />

    </>
  );
}
