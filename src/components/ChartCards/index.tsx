import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { optionsCards } from "../../chartData";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCards = (props: any) => {
  return (
    <>
      <Box ml="8%" mt="3%" display="flex">
        <Text fontSize="18px" fontWeight="light">
          {props.name}
        </Text>
      </Box>

      <Box w="55%" ml="20%">
        <Doughnut data={props.data} options={optionsCards} />
      </Box>
    </>
  );
};

export default ChartCards;
