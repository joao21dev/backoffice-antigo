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
      backgroundColor: ["#B34B39", "#B187FF", "#FF816B", "#27B377"],


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
                Cartões por agência
              </Text>
          </Box>

          <Box w="55%">
            <Doughnut data={data} options={options} />
          </Box>
        </Box>
      
    </>
  );
}
