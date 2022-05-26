import React from "react";
import { dataBanklinePayments } from "../../../dataTables";
import SidebarWithHeader from "../../Sidebar/sidebar";
import { CustomTable } from "../../Table";

export default function BankLinePayments() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Pagamentos",
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
      <SidebarWithHeader>
        <CustomTable columns={columns} data={dataBanklinePayments} />
      </SidebarWithHeader>
    </>
  );
}
