import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dataAccountDevices } from "../../../dataTables";
import { fetchTodos } from "../../../redux";
import { CustomTable } from "../../Table";

export default function AccountDevices() {
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
        Header: "Dispositivos",
        columns: [
          {
            Header: "ID Dispositivo",
            accessor: "id",
          },
          {
            Header: "Verificado",
            accessor: "verified",
          },
          {
            Header: "Tipo",
            accessor: "type",
          },
          {
            Header: "Fabricante",
            accessor: "fabricante",
          },
          {
            Header: "Modelo",
            accessor: "model",
          },
          {
            Header: "Visualizar",
            accessor: "open",
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
