import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Doughnut } from "react-chartjs-2";


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { options } from "./data";

ChartJS.register(ArcElement, Tooltip, Legend);



const ChartAccounts = (props: any) => {
  return (
    <>
      <Box m="2">
        <Text textAlign="center" fontSize="25px" fontWeight="bold">
          {props.name}
        </Text>
      </Box>

      <Flex justifyContent="center">
        <Box h="450px" justifyContent="center">
          <Doughnut data={props.data} options={options} />
        </Box>
      </Flex>
    </>
  );
};

export default ChartAccounts;
