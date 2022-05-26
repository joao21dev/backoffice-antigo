import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { optionsAccounts } from "../../../chartData";
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartAccounts = (props: any) => {
  return (
    <>
      <Box m="1" mb={props.mb}>
        <Text textAlign="center" fontSize="25px" fontWeight="medium">
          {props.name}
        </Text>
      </Box>

      <Flex justifyContent="center">
        <Box h="450px" justifyContent="center">
          <Doughnut data={props.data} options={optionsAccounts} />
        </Box>
      </Flex>
    </>
  );
};

export default ChartAccounts;
