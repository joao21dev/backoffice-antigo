import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import TableWrapper from "../../components/tableWrapper";
import { dataBanklineCards, dataBanklineCompras } from "../../dataTables";


export default function BankLineCompras() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Compras",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Titular/Conta",
            accessor: "titular",
          },
          {
            Header: "Número",
            accessor: "number",
          },
          {
            Header: "Valor",
            accessor: "money",
          },
          {
            Header: "Tipo",
            accessor: "type",
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
            Header: "Visulaizar",
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
            <CustomTable columns={columns} data={dataBanklineCompras} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
