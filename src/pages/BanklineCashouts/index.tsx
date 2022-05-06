import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import TableWrapper from "../../components/tableWrapper";
import { dataBanklineCards, dataBanklineCashouts, dataBanklineCompras } from "../../dataTables";


export default function BankLineCashouts() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Saques",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Conta",
            accessor: "account",
          },
          {
            Header: "Descrição",
            accessor: "description",
          },
          {
            Header: "Valor",
            accessor: "money",
          },
          {
            Header: "Número",
            accessor: "number",
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
            <CustomTable columns={columns} data={dataBanklineCashouts} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
