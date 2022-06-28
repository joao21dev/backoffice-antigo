import React, { useEffect, useState } from "react";

import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { dataAgencyCard, dataStatusCard } from "../../chartData";
import ChartCards from "../../components/dashboard/ChartCards";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import api from "../../services/api";

const Fares = () => {
  const [data, setData] = useState([]);

  

  const columns = React.useMemo(
    () => [
      {
        Header: "Tarifas",
        columns: [
          {
            Header: "Id",
            accessor: "_id",
          },
          {
            Header: "Nome",
            accessor: "name",
          },
          {
            Header: "Vencimento",
            accessor: "duoDate",
          },
          {
            Header: "Status",
            accessor: "document",
          },
          {
            Header: "Valor",
            accessor: "value",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/fares-create/${props.cell.row.cells[0].value}`}>
                  {""}
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
    const response = await api
      .get("/fares",{
        headers:{ 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization": "Bearer " + localStorage.getItem("access_token"),
       }
      }).then(data => {
setData(data.data)
      })
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
        <Text mb="2%" w="90%" fontSize="25px" fontWeight="bold">
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
        <CustomTable data={data} columns={columns} />
      </SidebarWithHeader>
    </>
  );
};

export default Fares;
