import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useState, useMemo, useEffect } from "react";

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import { dataAccountDocuments } from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";
import { Link, useParams } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import {
  fetchCards,
  fetchTodos,
  fetchUsers,
  fetchUsersCards,
  fetchUsersInfo,
} from "../../redux";
import { useDispatch, useSelector } from "react-redux";

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
