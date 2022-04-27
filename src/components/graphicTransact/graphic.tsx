import React, { useRef } from 'react';
import { Box, Flex, Text, useControllableState } from "@chakra-ui/react";
import 'chartjs-plugin-style';



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
 
  
  
} from 'chart.js';
import { Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend, 
  
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  },
  
  borderWidth: 2,
      borderRadius: 8,
      borderSkipped: false,
  responsive: true,
  plugins: {
    legend: {
      
      display: false
    },
  },
  
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dez'];


export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [12, 12, 22, 30, 25, 9, 15, 30, 40, 35, 39, 28],
      backgroundColor: 'F2EFFF',
      hoverBackgroundColor: ['#5932EA'],

    },
  ],
};

export default function Graphic() {
  
  const chartRef = useRef();
  const onClick = (event: any) => {
    console.log(event);
  }
  return (
    <>
    
    <Flex justifyContent='center'>
    <Box w='500px' h='450px' justifyContent='center'>
      <Bar 
    data={data} options={options} onClick={onClick} ref={chartRef} />
    
    </Box>
    </Flex>
    </>
      );
}