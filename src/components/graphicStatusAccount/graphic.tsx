import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Doughnut } from 'react-chartjs-2';


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
      legend: {
          position: 'bottom' as const,
          labels: {
            padding: 28
          }
        },
        
  },
  
};

export const data = {
  labels: ['Ativa', 'Pendente', 'Bloqueada', 'Desativada'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 7, 10,5],
      backgroundColor: ["#7958F0", "#9AE6B4", "#FCB6A4", "#C4B0FF"],

      borderWidth: 1,
    },
  ],
};



export default function Graphic() {
 




  return (
    <>
    <Box m='2'>   
       <Text textAlign='center'fontSize='25px' fontWeight='bold' >Contas por status</Text>
    </Box>

    <Flex justifyContent='center'>
    <Box h='450px' justifyContent='center'>
      <Doughnut 
    data={data} options={options} />
    
    </Box>
    </Flex>
    </>
      );

}
