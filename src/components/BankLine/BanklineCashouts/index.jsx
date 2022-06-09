import { Box } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dataBanklineCashouts } from "../../../dataTables";
import { fetchUsers } from "../../../redux";
import { CustomTable } from "../../Table";

export default function BankLineCashouts() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const data = useMemo(() => [...userData.users], [userData.users]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Saques",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Conta",
            accessor: "id",
          },
          {
            Header: "Descrição",
            accessor: "description",
          },
          {
            Header: "Valor",
            accessor: "money",
          },
          {
            Header: "Número",
            accessor: "number",
          },

          {
            Header: "Data",
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
              <Link to={`/bankline-compra/${props.cell.row.cells[0].value}`}>
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
  return (
    <>
      <CustomTable columns={columns} data={data} />
    </>
  );
}
