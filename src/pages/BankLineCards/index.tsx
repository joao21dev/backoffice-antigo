import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import TableWrapper from "../../components/tableWrapper";
import { dataBanklineCards } from "../../dataTables";


export default function BanklineCards() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Cartões",
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
            Header: "Tipo",
            accessor: "type",
          },
          {
            Header: "Data de Ativação",
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
          {
            Header: "",
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
            <CustomTable columns={columns} data={dataBanklineCards} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
