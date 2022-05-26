import React from "react";
import { dataBanklinePix } from "../../../dataTables";
import { CustomTable } from "../../Table";

export default function BankLinePix() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transferência PIX",
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
            Header: "Pagador/Recebedor",
            accessor: "payer",
          },
          {
            Header: "Tipo da Transação",
            accessor: "typeTransaction",
          },
          {
            Header: "Direção",
            accessor: "direction",
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
      <CustomTable columns={columns} data={dataBanklinePix} />
    </>
  );
}
