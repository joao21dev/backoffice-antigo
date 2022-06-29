import React, { useEffect, useMemo, useState } from "react";

import axios from "axios";

import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import api from "../../services/api";

const Agencias = () => {
  const [data, setData] = useState([]);
  console.log("data em agencias é: ", data);

  const columns = React.useMemo(
    () => [
      {
        Header: "Agências",
        columns: [
          {
            Header: "Id",
            accessor: "_id",
          },
          {
            Header: "Código da Agência",
            accessor: "number",
          },
          {
            Header: "Descrição",
            accessor: "description",
          },
          {
            Header: "Número de Contas",
            accessor: "",
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: (props) => (
              <Text>{props.cell.value ? "Ativo" : "Inativo"}</Text>
            ),
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/agencias-create/${props.cell.row.cells[0].value}`}>
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
    await api
      .get("/agency", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SidebarWithHeader>
        <Text mb="2%" w="90%" fontSize="25px" fontWeight="bold">
          Agências
        </Text>
        <Flex justifyContent="flex-end">
          <Link to="/agencias-create">
            {" "}
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
              Criar Agência
            </Box>
          </Link>
        </Flex>

        <CustomTable data={data} columns={columns} />
      </SidebarWithHeader>
    </>
  );
};

export default Agencias;
