import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: false,
};

export const data = {
  labels: ["Pessoa", "Empresarial"],
  datasets: [
    {
      label: "# of Votes",
      data: [74, 26],
      backgroundColor: ["#6674BB", "#E5E5E5"],
      borderWidth: 1,
      cutout: "85%",
    },
  ],
};

export default function Graphic() {
  return (
    <>
      <Flex justifyContent="center">
        <Box bg='red' width='110px' h='110px' justifyContent="center">
          {/* <Doughnut data={data} options={options} /> */}
          <Text>Gráfico</Text>
        </Box>
      </Flex>
    </>
  );
}
