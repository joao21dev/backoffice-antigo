import React, { useEffect, useMemo } from "react";

import { Box, Checkbox } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CustomTable } from "../../Table";
import { fetchTodos } from "../../../redux";

export default function AccountCards() {
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
        Header: "Cartões",
        columns: [
          {
            accessor: "accessor",
            Header: "Selecionar",
            Cell: ({ row: { original } }) => <Checkbox bg="#EDF2F7"></Checkbox>,
          },
          {
            Header: "Número",
            accessor: "userId",
          },
          {
            Header: "Tipo",
            accessor: "todo",
          },
          {
            Header: "Data de Ativação",
            accessor: "id",
          },
          {
            Header: "Status",
            accessor: "completed",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/accounts-card/${props.cell.row.cells[1].value}`}>
                {console.log("props cell: ", props.cell)}
                <Box ml="25%">
                  <AiFillEye color={"gray"} fontSize="22px" />
                </Box>
              </Link>
            ),
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
