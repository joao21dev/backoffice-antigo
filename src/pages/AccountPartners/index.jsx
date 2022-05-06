import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import { dataAccountPartners } from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";

export default function AccountPartners() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Sócios",
        columns: [
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
            Header: "Relacionamento",
            accessor: "relationship",
          },
          {
            Header: "Data e Hora",
            accessor: "time",
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
    <>
      <SidebarWithHeader>
        <NavAccount />
        <TableWrapper>
          <ChakraProvider>
            <CustomTable columns={columns} data={dataAccountPartners} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
