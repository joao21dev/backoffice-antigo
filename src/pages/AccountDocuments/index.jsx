import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useState, useMemo, useEffect } from "react";

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

import NavAccount from "../../components/accounts/NavAccount";
import { CustomTable } from "../../components/Table";
import { dataAccountDocuments } from "../../dataTables";
import TableWrapper from "../../components/tableWrapper";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

export default function AccountDocuments() {
  const [data, setData] = useState([]);

  

  const userData = useMemo(() => [...data], [data]);

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
            accessor: "company.name",
          },
          {
            Header: "Formato",
            accessor: "company.bs",
          },
          {
            Header: "Data",
            accessor: "geo.lat",
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
   
        <CustomTable data={userData} columns={columns} />

    </>
  );
}
