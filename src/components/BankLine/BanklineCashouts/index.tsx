import React from "react";
import { dataBanklineCashouts } from "../../../dataTables";
import { CustomTable } from "../../Table";

export default function BankLineCashouts() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Saques",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Conta",
            accessor: "account",
          },
          {
            Header: "Descrição",
            accessor: "description",
          },
          {
            Header: "Valor",
            accessor: "money",
          },
          {
            Header: "Número",
            accessor: "number",
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
            <CustomTable columns={columns} data={dataBanklineCashouts} />
    </>
  );
}
