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
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { RiEditFill } from "react-icons/ri";
import { ChevronUpIcon, ChevronDownIcon, SettingsIcon } from "@chakra-ui/icons";
import { useTable, useSortBy } from "react-table";

import { Checkbox } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { Link } from "react-router-dom";
import AccountsFilter from "../../components/AccountsFilter";

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

export default function Accounts() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Contas",
        columns: [
          {
            Header: "Selecionar",
            accessor: "box",
          },
          {
            Header: "ID Conta",
            accessor: "id",
          },
          {
            Header: "Nome",
            accessor: "name",
          },
          {
            Header: "E-mail",
            accessor: "email",
          },
          {
            Header: "Documento",
            accessor: "document",
          },
          {
            Header: "Saldo",
            accessor: "money",
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
          },
          {
            Header: "Excluir/Editar",
            accessor: "change",
          },
        ],
      },
    ],
    []
  );

  const data = [
    {
      box: <Checkbox></Checkbox>,
      id: "1",
      name: "Test",
      email: "text@test.com",
      document: "text",
      money: 0,
      date: "17/03/2022",
      status: (
        <Box borderRadius={15}  bg="green">
          <Text color={"white"} textAlign="center">
            Ativo
          </Text>
        </Box>
      ),
      trash: <SettingsIcon color={"gray"} />,
      open: (
        <Link to="/account-detail">
          <Box ml='10px'>
            <AiFillEye color={"gray"} fontSize='22px' />
          </Box>
        </Link>
      ),
      change: (
        <Box display="flex" justifyContent="space-around">
          <FaTrashAlt color={"gray"} />
          <RiEditFill color={"gray"}  />
        </Box>
      ),
    },
  ];
  return (
    <>
      <SidebarWithHeader>
        <Flex>
          <Box m={15} mt="5%">
            <Stack>
              {" "}
              <Flex>
                {" "}
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
                <Button
                  colorScheme=""
                  ml="900"
                  w="100%"
                  bg="#5A32EA"
                  color="white"
                  fontSize="12px"
                  fontWeight="semibold"
                >
                  Importar Contas
                </Button>
              </Flex>
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
