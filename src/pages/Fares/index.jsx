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

const Fares = () => {
  const [data, setData] = useState([]);

  const userData = useMemo(() => [...data], [data]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Contas",
        columns: [
          {
            accessor: "accessor",
            Header: "Selecionar",
            Cell: ({ row: { original } }) => <Checkbox bg="#EDF2F7"></Checkbox>,
          },
          {
            Header: "Conta",
            accessor: "firstName",
          },
          {
            Header: "Descrição Extrato",
            accessor: "lastName",
          },
          {
            Header: "Vencimento",
            accessor: "email",
          },
          {
            Header: "Status",
            accessor: "document",
          },
          {
            Header: "Valor Mensal",
            accessor: "money",
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
      <Text mb='2%'  w="90%" fontSize="25px" fontWeight="bold">
        Tarifas
      </Text>
        <Grid
          m="15"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={5}
        >
          <GridItem colSpan={1} bg="white" borderRadius="15px" boxShadow="lg">
            <ChartCards name={"Cartões por status"} data={dataStatusCard} />
          </GridItem>
          <GridItem colSpan={1} bg="white" borderRadius="15px" boxShadow="lg">
            <ChartCards name={"Contas por agência"} data={dataAgencyCard} />
          </GridItem>
          <GridItem colSpan={1} bg="white" borderRadius="15px" boxShadow="lg">
            <ChartCards name={"Contas por agência"} data={dataAgencyCard} />
          </GridItem>
        </Grid>

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
            <Link to="/fares-create">Criar Tarifa</Link>
          </Box>
        </Flex>
        <CustomTable data={userData} columns={columns} />
      </SidebarWithHeader>
    </>
  );
};

export default Fares;
