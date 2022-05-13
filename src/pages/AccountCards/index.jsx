import { Box, ChakraProvider, Checkbox } from "@chakra-ui/react";
import React, { useEffect, useState, useMemo } from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import NavAccount from "../../components/accounts/NavAccount";

import TableWrapper from "../../components/tableWrapper";
import { dataAccountCards } from "../../dataTables";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

export default function AccountCards() {
  const [data, setData] = useState([]);

  const userData = useMemo(() => [...data], [data]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Cartões",
        columns: [
          {
            accessor: "accessor",
            Header: "Selecionar",
            Cell: ({ row: { original } }) => <Checkbox bg="#EDF2F7"></Checkbox>,
          },
          {
            Header: "Número",
            accessor: "bank.cardNumber",
          },
          {
            Header: "Tipo",
            accessor: "bank.cardType",
          },
          {
            Header: "Data de Ativação",
            accessor: "bank.cardExpire",
          },
          {
            Header: "Status",
            accessor: "eyeColor",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: ({ row: { original } }) => (
              <Link to="/account-card-detail">
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
      <CustomTable columns={columns} data={userData} />
    </>
  );
}
