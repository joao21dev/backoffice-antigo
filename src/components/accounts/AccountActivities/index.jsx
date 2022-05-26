import React from "react";
import { dataAccountActivities } from "../../../dataTables";
import { CustomTable } from "../../Table";



export default function AccountActivities() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Atividades",
        columns: [
          {
            Header: "Usuário",
            accessor: "user",
          },
          {
            Header: "IP",
            accessor: "ip",
          },
          {
            Header: "Descrição",
            accessor: "description",
          },
          {
            Header: "Data e Hora",
            accessor: "time",
          },
        ],
      },
    ],
    []
  );
  return <CustomTable columns={columns} data={dataAccountActivities} />;
}
