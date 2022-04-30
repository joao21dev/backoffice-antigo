import { Box, Flex, Text } from "@chakra-ui/react";
import React from 'react';
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
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      
      position: 'bottom' as const,
    },
    
    
    
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", "out", 'nov'
,"dez"];

export const data = {
  labels,
  
  datasets: [
    {
      label: 'Quantidade',
      data:  [15,32,5,10,20,30,1,4,2,10,5,4],
      backgroundColor: 'purple',
      
    },
    
  ],
};



export default function Graphic() {
  return (
    <>
    <Flex justifyContent='center'>
    <Box w='70%'  justifyContent='center'>

      <Bar 
      

    data={data} />
    </Box>
    </Flex>
  

      
    
    </>
  );
}
