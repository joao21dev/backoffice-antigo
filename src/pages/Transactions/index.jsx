import {
  Flex,
  Box,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch, FiTrash } from "react-icons/fi";
import { ChevronUpIcon, ChevronDownIcon, SettingsIcon } from "@chakra-ui/icons";
import { useTable, useSortBy } from "react-table";

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { Link } from "react-router-dom";
import NavAccount from "../../components/NavAccount";

function CustomTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <Th
                  userSelect="none"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <Flex alignItems="center">
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ChevronDownIcon ml={1} w={4} h={4} />
                      ) : (
                        <ChevronUpIcon ml={1} w={4} h={4} />
                      )
                    ) : (
                      ""
                    )}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <br />
      <Text textAlign="center" fontWeight="normal">
        Demostrando os primeiros 20 resultados da {rows.length} linha
      </Text>
    </>
  );
}

export default function Transactions() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transações",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "Detalhe",
            accessor: "detail",
          },
          {
            Header: "Tipo da Transação",
            accessor: "typeTransaction",
          },
          {
            Header: "Tipo",
            accessor: "type",
          },
          {
            Header: "Valor",
            accessor: "money",
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );

  const data = [
    {
      box: <Checkbox></Checkbox>,
      detail: "123423423423749878",
      typeTransaction: (
        <Box borderRadius={15} textAlign="center" bg="#E8EEFC">
          <Text color="#1D54E1" >
            PIX RECEBIDO
          </Text>
        </Box>
        
      ),
      type: (
        <Box borderRadius={15}  w="60%" bg="#e5f7ed">
          <Text color={"red"} textAlign="center">
            DÉBITO
          </Text>
        </Box>
      ),
      money: "R$ 100,00",
      time: "17/03/2022 15:12:00",
      status: (
        <Box borderRadius={15}   bg="#e5f7ed">
          <Text color={"green"} textAlign="center">
            PROCESSADA
          </Text>
        </Box>
      ),
    },
  ];
  return (
    <>
      <SidebarWithHeader>
        <NavAccount />
        <Flex>
          <Box m={15} mt="5%">
            <Stack>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FiSearch color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Pesquisar"
                  bg="white"
                  borderRadius="15px"
                />
              </InputGroup>
            </Stack>
          </Box>
        </Flex>
        <Flex>
          <Box
            bg="white"
            borderRadius="15px"
            justifyContent="center"
            alignItems="center"
            m={4}
            w="150vw"
          >
            <ChakraProvider>
              <CustomTable columns={columns} data={data} />
            </ChakraProvider>
          </Box>
        </Flex>
      </SidebarWithHeader>
    </>
  );
}
