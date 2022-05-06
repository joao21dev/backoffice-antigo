import {
  ChakraProvider,
} from "@chakra-ui/react";
import React from "react";

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import { dataAccountDocuments} from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";

export default function AccountDocuments() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Documentos",
        columns: [
          {
            Header: <Checkbox></Checkbox>,
            accessor: "box",
          },
          {
            Header: "Tipo de Documento",
            accessor: "documentType",
          },
          {
            Header: "Formato",
            accessor: "format",
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
            Header: "Vizualizar",
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
            <CustomTable columns={columns} data={dataAccountDocuments} />
          </ChakraProvider>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
