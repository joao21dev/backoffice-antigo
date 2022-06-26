import React, { useEffect, useMemo, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { dataStatusCard } from "../../chartData";
import ChartCards from "../../components/dashboard/ChartCards";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import api from "../../services/api";

const Plans = () => {
  const [data, setData] = useState([]);

  const userData = useMemo(() => [...data], [data]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Planos",
        columns: [
          {
            Header: "Id",
            accessor: "_id",
          },
          {
            Header: "Nome do plano",
            accessor: "name",
          },
          {
            Header: "Pix",
            accessor: "taxPix",
          },
          {
            Header: "Ted",
            accessor: "taxTed",
          },
          {
            Header: "Boleto",
            accessor: "taxBillet",
          },
          {
            Header: "Visualizar",
            accessor: "open",
            Cell: (props) => (
             
                <Link to={`/plan-detail/${props.cell.row.cells[0].value}`}>
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
      .get("/plans",{
        headers:{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization": "Bearer " + localStorage.getItem("access_token"),
        }
      })
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
        <Text mb="2%" w="90%" fontSize="25px" fontWeight="bold">
          Planos
        </Text>
        <Box
          fontWeight="medium"
          p="2"
          boxShadow="md"
          borderRadius="15px"
          mt="15px"
          bg="white"
          w="35%"
          color="black"
        >
        </Box>
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
            <Link to="/plan-detail">Criar Plano</Link>
          </Box>
        </Flex>
        <CustomTable data={data} columns={columns} />
      </SidebarWithHeader>
    </>
  );
};

export default Plans;
