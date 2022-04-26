import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dez'];

export const data = {
  labels,
  datasets: [
    {
      label: 'quantidade',
      data: [12, 12, 22, 30, 25, 9, 15, 30, 40, 35, 39, 28],
      backgroundColor: '#5932EA',
    },
  ],
};

export default function Graphic() {
  return (
    <>
    <Flex justifyContent='center'>
    <Box h='450px' justifyContent='center'>
      <Bar 
    data={data} options={options} />
    
    </Box>
    </Flex>
    </>
      );
}