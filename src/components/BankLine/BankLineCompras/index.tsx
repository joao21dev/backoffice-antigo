import React from "react";
import { dataBanklineCompras } from "../../../dataTables";
import { CustomTable } from "../../Table";




export default function BankLineCompras() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Compras",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Titular/Conta",
            accessor: "titular",
          },
          {
            Header: "Número",
            accessor: "number",
          },
          {
            Header: "Valor",
            accessor: "money",
          },
          {
            Header: "Tipo",
            accessor: "type",
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
            Header: "Visulaizar",
            accessor: "open",
          },
        ],
      },
    ],
    []
  );
  return (
    <>
            <CustomTable columns={columns} data={dataBanklineCompras} />
     
    </>
  );
}
