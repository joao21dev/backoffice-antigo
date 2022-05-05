import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import TableWrapper from "../../components/tableWrapper";
import { dataAccountCard, dataAccountCards } from "../../dataTables";

export default function AccountCards() {
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
        <NavAccount />
        <TableWrapper>
          <ChakraProvider>
            <CustomTable columns={columns} data={dataAccountCards} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
