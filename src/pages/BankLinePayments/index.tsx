import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import TableWrapper from "../../components/tableWrapper";
import { dataBanklineCards, dataBanklineCashouts, dataBanklineCompras, dataBanklinePayments } from "../../dataTables";


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
