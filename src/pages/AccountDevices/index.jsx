import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import { dataAccountDevices } from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";

export default function AccountDevices() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Dispositivos",
        columns: [
          {
            Header: "ID Dispositivo",
            accessor: "id",
          },
          {
            Header: "Verificado",
            accessor: "verified",
          },
          {
            Header: "Tipo",
            accessor: "type",
          },
          {
            Header: "Fabricante",
            accessor: "fabricante",
          },
          {
            Header: "Modelo",
            accessor: "model",
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
  
        <CustomTable columns={columns} data={dataAccountDevices} />
    </>
  );
}
