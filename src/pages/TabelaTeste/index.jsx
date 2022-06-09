import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import TableWrapper from "../../components/tableWrapper";
import { GlobalFilter } from "../TabelaTeste2/globalFilter";

export function Products(props) {
  const [products, setProducts] = useState([
    // {
    //   box: "",
    //   id: "1",
    //   name: " Test",
    //   email: "text@test.com",
    //   document: "text",
    //   money: 0,
    //   date: "17/03/2022",
    //   status: "Ativo",
    //   trash: "Excluir",
    //   open: "abrir",
    //   change: "editar",
    // },
  ]);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://api-hiperbanco.herokuapp.com")
      .catch((err) => console.log(err));

    if (response) {
      const products = response.data;

      console.log("Products: ", products);
      setProducts(products);
    }
  };

  const productsData = useMemo(() => [...products], [products]);

  const productsColumns = useMemo(
    () =>
      products[0]
        ? Object.keys(products[0])
            .filter((key) => key !== "rating")
            .map((key) => {
              if (key === "image")
                return {
                  Header: key,
                  accessor: key,
                  Cell: ({ value }) => <img src={value} />,
                  maxWidth: 70,
                };

              return { Header: key, accessor: key };
            })
        : [],
    [products]
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  const tableInstance = useTable(
    {
      columns: productsColumns,
      data: productsData,
    },
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;



  const isEven = (idx) => idx % 2 === 0;

  return (
    <>
      <SidebarWithHeader>
      <GlobalFilter
      preGlobalFilteredRows={preGlobalFilteredRows}
      setGlobalFilter={setGlobalFilter}
      globalFilter={state.globalFilter}
    />
        <TableWrapper>
         
          <Table {...getTableProps()}>
            <Thead>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : ""}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {rows.map((row, idx) => {
                prepareRow(row);

                return (
                  <Tr {...row.getRowProps()} bg={isEven(idx) ? "#C1F2E0" : ""}>
                    {row.cells.map((cell, idx) => (
                      <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                    ))}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableWrapper>
      </SidebarWithHeader>
    </>
  );
}
