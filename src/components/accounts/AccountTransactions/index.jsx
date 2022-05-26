import React from "react";
import { dataAccountTransactions } from "../../../dataTables";
import { CustomTable } from "../../Table";



export default function AccountTransactions() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transações",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Detalhe",
            accessor: "detail",
          },
          {
            Header: "Tipo da Transação",
            accessor: "typeTransaction",
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
      <CustomTable columns={columns} data={dataAccountTransactions} />
    </>
  );
}
