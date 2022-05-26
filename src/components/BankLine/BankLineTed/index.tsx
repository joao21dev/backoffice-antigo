import React from "react";
import { dataBanklineTed } from "../../../dataTables";
import { CustomTable } from "../../Table";



export default function BankLineTed() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transferência TED",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Pagador/Recebedor",
            accessor: "payer",
          },
          {
            Header: "Conta Bancária",
            accessor: "bankAccount",
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
      <CustomTable columns={columns} data={dataBanklineTed} />
    </>
  );
}
