import { Box, Checkbox } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import api from "../../services/usersApi.tsx";

const Accounts = () => {
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
            accessor: "_id",
          },
          {
            Header: "Nome",
            accessor: "registerName",
          },
          {
            Header: "E-mail",
            accessor: "email",
          },
          {
            Header: "Documento",
            accessor: "documentNumber",
          },
          {
            Header: "Data",
            accessor: "dateNumberDocumentPhoto",
          },
          {
            Header: "Status",
            accessor: "accounts[0].status",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/accounts/${props.cell.row.cells[1].value}`}>
                {" "}
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
    const response = await api.get().catch((err) => console.log(err));

    if (response) {
      const data = response.data;

      console.log("Data da api em accounts: ", data);
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

export default Accounts;
