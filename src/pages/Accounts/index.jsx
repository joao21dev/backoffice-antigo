import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import { dataAccounts } from "../../dataTables";
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
