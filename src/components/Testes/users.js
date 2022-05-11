import { Box, Checkbox } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { generatePath, Link, useLocation, useParams } from "react-router-dom";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";

const Users = (props) => {
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
            accessor: "firstName",
          },
          {
            Header: "E-mail",
            accessor: "email",
          },
          {
            Header: "Telefone",
            accessor: "phone",
          },
          {
            Header: "Data de Nascimento",
            accessor: "birthDate",
          },
          {
            Header: "Cidade",
            accessor: "address.city",
          },
          {
            Header: "Sexo",
            accessor: "gender",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/users/${props.cell.row.cells[1].value}`}>
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
    const response = await axios
      .get("https://dummyjson.com/users")
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data.users;

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

export default Users;
