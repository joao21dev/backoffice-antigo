import { Box, Checkbox } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { generatePath, Link, useLocation, useParams } from "react-router-dom";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import useUserStore from "../../store/user";

const Users = (props) => {
  const data = React.useMemo(
    () => [
      {
        id: "627031bb8f4626e8ee198f7e",
        client_id: "623668ac0f25e16f63295048",
        registerName: "Alessandro Rocha ",
        password:
          "$2b$10$BX.0XanC9uFBfi4Hh9o9FOAeYWQkhT7VvtTC.NtF57H6EQpvDDue.",
        socialName: "Alessandro Rocha ",
        phone: "+55 11948580303",
        address: {
          zipCode: "02523000",
          addressLine: "Rua Urbano Duarte",
          buildingNumber: "343",
          complement: "",
          neighborhood: "Vila Baruel",
          city: "São Paulo",
          state: "SP",
          country: "BR",
        },
        birthDate: "1984-12-16",
        motherName: "Maria do Socorro Sousa ",
        email: "brokersandro@gmail.com",
        isPoliticallyExposedPerson: false,
        documentNumber: "05365433483",
        documentNumberPhoto: "332616459",
        dateNumberDocumentPhoto: "16/12/2020",
        status: "CREATED",
        tokens: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        accounts: [
          {
            status: "ACTIVE",
            branch: "0001",
            number: "249050",
            _id: { $oid: "627c4ef8cf04fb5675869f11" },
          },
        ],
        _v: 0,
      },
    ],
    []
  );


  

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
            Header: "ID Conta",
            accessor: "id",
          },
          {
            Header: "Nome",
            accessor: "socialName",
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
            Header: "Saldo",
            accessor: "buildingNumber",
          },
          {
            Header: "Status",
            accessor: "status",
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

  // const fetchData = async () => {
  //   const response = await axios
  //     .get("https://627d18c1e5ac2c452afcfcd2.mockapi.io/user")
  //     .catch((err) => console.log(err));

  //   if (response) {
  //     const data = response;

  //     console.log("Data: ", data);
  //     setData(data);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const users = useUserStore(state => state.users);

  return (
    <>
      <SidebarWithHeader>
      {users?.map(user => (
        <p>{user.name}</p>
      ))}
      </SidebarWithHeader>
    </>
  );
};

export default Users;
