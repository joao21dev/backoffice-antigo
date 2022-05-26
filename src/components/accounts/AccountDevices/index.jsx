import React from "react";
import { dataAccountDevices } from "../../../dataTables";
import { CustomTable } from "../../Table";



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
