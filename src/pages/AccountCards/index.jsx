import { Box, ChakraProvider, Checkbox } from "@chakra-ui/react";
import React, { useEffect, useState, useMemo } from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import NavAccount from "../../components/accounts/NavAccount";

import TableWrapper from "../../components/tableWrapper";
import { dataAccountCards } from "../../dataTables";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCards,
  fetchTodos,
  fetchUsers,
  fetchUsersCards,
  fetchUsersInfo,
} from "../../redux";


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
            Cell: ({ row: { original } }) => (
              <Link to="/account-card-detail">
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
