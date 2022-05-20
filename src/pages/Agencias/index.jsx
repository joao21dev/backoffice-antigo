import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { dataAgencyCard, dataStatusCard } from "../../chartData";
import ChartCards from "../../components/dashboard/ChartCards";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";

const Agencias = () => {
  const [data, setData] = useState([]);

  const userData = useMemo(() => [...data], [data]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Agências",
        columns: [
          {
            accessor: "accessor",
            Header: "Selecionar",
            Cell: ({ row: { original } }) => <Checkbox bg="#EDF2F7"></Checkbox>,
          },
          {
            Header: "Código da Agência",
            accessor: "firstName",
          },
          {
            Header: "Nome da Agência",
            accessor: "lastName",
          },
          {
            Header: "Total de Contas",
            accessor: "email",
          },
          {
            Header: "Status",
            accessor: "document",
          },
          {
            Header: "Data de Criação",
            accessor: "money",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/agencia-detail`}>
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
            <Link to="/agencias-create">Criar Agência</Link>
          </Box>
        </Flex>
        <CustomTable data={userData} columns={columns} />
      </SidebarWithHeader>
    </>
  );
};

export default Agencias;
