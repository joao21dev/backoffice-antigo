import React from "react";
import { dataBanklineCards } from "../../../dataTables";
import { CustomTable } from "../../Table";

export default function BanklineCards() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Cartões",
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
            Header: "Tipo",
            accessor: "type",
          },
          {
            Header: "Data de Ativação",
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
          {
            Header: "",
            accessor: "edit",
          },
        ],
      },
    ],
    []
  );
  return (
    <>
        <CustomTable columns={columns} data={dataBanklineCards} />
    </>
  );
}
