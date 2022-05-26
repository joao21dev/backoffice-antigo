import React from "react";
import { dataBanklineP2P } from "../../../dataTables";
import { CustomTable } from "../../Table";

export default function BankLineP2P() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transferência P2P",
        columns: [
          {
            Header: "Conta de Origem",
            accessor: "accountFrom",
          },
          {
            Header: "Conta de Destino",
            accessor: "accountTo",
          },
          {
            Header: "Tipo",
            accessor: "type",
          },
          {
            Header: "Valor",
            accessor: "money",
          },
          {
            Header: "Data e Hora",
            accessor: "time",
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <CustomTable columns={columns} data={dataBanklineP2P} />
    </>
  );
}
