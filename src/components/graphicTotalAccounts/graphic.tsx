import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  cutout: "80%",

  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        boxWidth: 10,
        padding: 20,
      },
    },
  },
};

export const data = {
  labels: ["São Paulo", "Belo Horizonte", "Salvador", "Curitiba"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 30, 40],
      backgroundColor: ["#73A3FA", "#FFD66C", "#FE8F6B", "#D4D4D8"],
      borderColor: ["#73A3FA", "#FFD66C", "#FE8F6B", "#D4D4D8"],

      borderWidth: 1,
    },
  ],
};

export default function Graphic() {
  return (
    <>
      
        <Box display="flex" >
          <Box m='2'>
            <Text  fontSize="18px" fontWeight="light">
              Contas por agência
            </Text>
            <Text fontSize="18px" fontWeight="bold">
              530
            </Text>
          </Box>

          <Box w="55%">
            <Doughnut data={data} options={options} />
          </Box>
        </Box>
      
    </>
  );
}
