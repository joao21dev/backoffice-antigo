import React from "react";

import { Box, Text } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { optionsCards } from "../../../chartData";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCards = (props: any) => {
  return (
    <>
      <Text ml="8%" mt="3%" fontSize="18px" fontWeight="medium">
        {props.name}
      </Text>

      <Box w="70%" ml="15%">
        <Doughnut data={props.data} options={optionsCards} />
      </Box>
    </>
  );
};

export default ChartCards;
