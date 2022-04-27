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
            padding: 16
          }
        },
        
  },
  
};

export const data = {
  labels: ['Ativa', 'Pendente', 'Bloqueada', 'Desativada'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3,5],
      backgroundColor: [
        '#73A3FA',
        '#FFD66C',
        '#FE8F6B',
        '#D4D4D8',
        
      ],
      borderColor: [
        '#73A3FA',
        '#FFD66C',
        '#FE8F6B',
        '#D4D4D8',
        
      ],
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
