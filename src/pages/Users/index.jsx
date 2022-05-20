import { Box, Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { dataStatusCard } from "../../chartData";
import ChartCards from "../../components/dashboard/ChartCards";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";

const Users = () => {
  const [data, setData] = useState([]);

  const userData = useMemo(() => [...data], [data]);

  const userColumns = React.useMemo(
    () => [
      {
        Header: "Usuários",
        columns: [
          {
            accessor: "accessor",
            Header: "Selecione",
            Cell: ({ row: { original } }) => <Checkbox bg="#EDF2F7"></Checkbox>,
          },
          {
            Header: "Conta",
            accessor: "firstName",
          },
          {
            Header: "E-mail",
            accessor: "email",
          },
          {
            Header: "Tipo",
            accessor: "document",
          },

          {
            Header: "Status",
            accessor: "date",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/plan-detail`}>
                {" "}
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
  const TypesColumns = React.useMemo(
    () => [
      {
        Header: "Tipos de Acesso",
        columns: [
          {
            accessor: "accessor",
            Header: "Selecione",
            Cell: ({ row: { original } }) => <Checkbox bg="#EDF2F7"></Checkbox>,
          },
          {
            Header: "Tipo",
            accessor: "document",
          },

          {
            Header: "Status",
            accessor: "date",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/plan-detail`}>
                {" "}
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
      <Text w="90%" fontSize="25px" fontWeight="semibold">
      Usuários
   </Text>
        <CustomTable data={userData} columns={userColumns} />
        <Flex justifyContent="flex-end">
          <Box
            fontWeight="semibold"
            color="white"
            borderRadius="15px"
            p="4"
            mx="4"
            bg="#5A32EA"
            alignItems="center"
            align="center"
            w="200px"
          >
            <Link to="/users-create">Criar Usuário</Link>
          </Box>
        </Flex>
        <Text w="90%" fontSize="25px" fontWeight="semibold">
        Tipos de Acesso
     </Text>
        <CustomTable data={userData} columns={TypesColumns} />
        <Flex justifyContent="flex-end">
          <Box
            fontWeight="semibold"
            color="white"
            borderRadius="15px"
            p="4"
            mx="4"
            bg="#5A32EA"
            alignItems="center"
            align="center"
            w="200px"
          >
            <Link to="/permissions-create">Criar Tipo</Link>
          </Box>
        </Flex>
      </SidebarWithHeader>
    </>
  );
};

export default Users;
