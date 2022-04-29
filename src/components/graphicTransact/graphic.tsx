import React, { useRef } from "react";
import { Box, Flex, Text, useControllableState } from "@chakra-ui/react";
import "chartjs-plugin-style";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },

  borderWidth: 2,
  borderRadius: 8,
  borderSkipped: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dez",
];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [12, 12, 22, 30, 25, 9, 15, 30, 40, 35, 39, 28],
      backgroundColor: "#5932EA",
      hoverBackgroundColor: "#2c09bb",
      mode: "dataset",
    },
  ],
};

export default function Graphic() {
  return (
    <>

      
        <Box w="65%" ml='20%'>
          <Bar data={data} options={options} />
        </Box>
     
    </>
  );
}
