import {
  Box,
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";


const TableTeste2 = () => {
  const [data, setData] = useState([]);

  const userData = useMemo(() => [...data], [data]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Contas",
        columns: [
          {
            accessor: "accessor",
            Header: "Header",
            Cell: ({ row: { original } }) => <Checkbox bg="#EDF2F7"></Checkbox>,
          },
          {
            Header: "ID Conta",
            accessor: "id",
          },
          {
            Header: "Nome",
            accessor: "name",
          },
          {
            Header: "E-mail",
            accessor: "email",
          },
          {
            Header: "Documento",
            accessor: "document",
          },
          {
            Header: "Saldo",
            accessor: "money",
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

  const fetchData = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data;

      console.log("Data: ", data);
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SidebarWithHeader>
        <CustomTable data={userData} columns={columns} />
      </SidebarWithHeader>
    </>
  );
};

export default TableTeste2;
