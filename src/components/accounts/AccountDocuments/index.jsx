import React, { useMemo, useEffect } from "react";

import { Checkbox } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchTodos } from "../../../redux";
import { CustomTable } from "../../Table";

export default function AccountDocuments() {
  const userData = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const data = useMemo(() => [...userData.todos], [userData.todos]);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchTodos(id));
  }, [dispatch]);

  console.log("accountDocuments todos: ", userData);

  const columns = React.useMemo(
    () => [
      {
        Header: "Documentos",
        columns: [
          {
            accessor: "accessor",
            Header: "Header",
            Cell: ({ row: { original } }) => <Checkbox bg="#EDF2F7"></Checkbox>,
          },
          {
            Header: "Tipo de Documento",
            accessor: "id",
          },
          {
            Header: "Formato",
            accessor: "todo",
          },
          {
            Header: "Data",
            accessor: "userId",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: ({ row: { original } }) => (
              <Link to="/accounts-account-detail">
                <Box ml="25%">
                  <AiFillEye color={"gray"} fontSize="22px" />
                </Box>
              </Link>
            ),
          },
          {
            Header: "Excluir",
            accessor: "delete",
            Cell: ({ row: { original } }) => (
              <Box display="flex" justifyContent="space-around">
                <FaTrashAlt color={"gray"} />
              </Box>
            ),
          },
        ],
      },
    ],
    []
  );
  return (
    <>
      <CustomTable data={data} columns={columns} />
    </>
  );
}
