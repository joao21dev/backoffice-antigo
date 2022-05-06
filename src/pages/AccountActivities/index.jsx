import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import NavAccount from "../../components/accounts/NavAccount";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import { dataAccountActivities } from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";

export default function AccountActivities() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Atividades",
        columns: [
          {
            Header: "Usuário",
            accessor: "user",
          },
          {
            Header: "IP",
            accessor: "ip",
          },
          {
            Header: "Descrição",
            accessor: "description",
          },
          {
            Header: "Data e Hora",
            accessor: "time",
          },
        ],
      },
    ],
    []
  );
  return (
    <SidebarWithHeader>
      <NavAccount />
      <TableWrapper>
        <ChakraProvider>
          <CustomTable columns={columns} data={dataAccountActivities} />
        </ChakraProvider>
      </TableWrapper>
    </SidebarWithHeader>
  );
}
