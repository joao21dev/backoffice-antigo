import React from "react";
import { dataBanklineBoletos } from "../../../dataTables";
import { CustomTable } from "../../Table";


export default function BankLineBoletos() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Boletos",
        columns: [
          {
            Header: "Conta",
            accessor: "account",
          },
          {
            Header: "Tipo da Transação",
            accessor: "typeTransaction",
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
          {
            Header: "Visualizar",
            accessor: "open",
          },
        ],
      },
    ],
    []
  );
  return <CustomTable columns={columns} data={dataBanklineBoletos} />;
}
