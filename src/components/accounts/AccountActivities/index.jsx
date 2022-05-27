import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dataAccountActivities } from "../../../dataTables";
import { fetchTodos } from "../../../redux";
import { CustomTable } from "../../Table";

export default function AccountActivities() {
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
        Header: "Atividades",
        columns: [
          {
            Header: "Usuário",
            accessor: "todo",
          },
          {
            Header: "IP",
            accessor: "id",
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
  return <CustomTable columns={columns} data={data} />;
}
