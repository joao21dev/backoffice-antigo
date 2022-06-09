import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataBanklinePix } from "../../../dataTables";
import { fetchUsers } from "../../../redux";
import { CustomTable } from "../../Table";

export default function BankLinePix() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const data = useMemo(() => [...userData.users], [userData.users]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
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
            accessor: "id",
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
      <CustomTable columns={columns} data={data} />
    </>
  );
}
