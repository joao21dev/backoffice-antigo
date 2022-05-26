import React from "react";
import { dataAccountPartners } from "../../../dataTables";
import { CustomTable } from "../../Table";



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
      <CustomTable columns={columns} data={dataAccountPartners} />
    </>
  );
}
