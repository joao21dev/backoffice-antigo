import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dataAccountTransactions } from "../../../dataTables";
import { fetchTodos } from "../../../redux";
import { CustomTable } from "../../Table";

export default function AccountTransactions() {
  const userData = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const data = useMemo(() => [...userData.todos], [userData.todos]);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchTodos(id));
  }, [dispatch]);
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
            accessor: "id",
          },
          {
            Header: "Tipo",
            accessor: "todo",
          },
          {
            Header: "Valor",
            accessor: "userId",
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
