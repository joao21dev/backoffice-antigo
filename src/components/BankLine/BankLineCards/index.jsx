import { Box } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dataBanklineCards } from "../../../dataTables";
import { fetchUsers } from "../../../redux";
import { CustomTable } from "../../Table";

export default function BanklineCards() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const data = useMemo(() => [...userData.users], [userData.users]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Cartões",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Titular/Conta",
            accessor: "id",
          },
          {
            Header: "Número",
            accessor: "number",
          },
          {
            Header: "Tipo",
            accessor: "type",
          },
          {
            Header: "Data de Ativação",
            accessor: "date",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/bankline-card/${props.cell.row.cells[1].value}`}>
                {" "}
                <Box ml="25%">
                  <AiFillEye color={"gray"} fontSize="22px" />
                </Box>
              </Link>
            ),
          },
          {
            Header: "",
            accessor: "edit",
          },
        ],
      },
    ],
    []
  );
  return (
    <>
        <CustomTable columns={columns} data={data} />
    </>
  );
}
