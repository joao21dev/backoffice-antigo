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
                padding: 32
              }
          },
    },
  };

export const data = {
  labels: ['Pessoa', 'Empresarial'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        '#1D54E1',
        '#54C5EB',
        
      ],
      borderWidth: 1,
    },
  ],
};



export default function Graphic() {
 




  return (
    <>
    <Box m='2'>   
       <Text textAlign='center'fontSize='25px' fontWeight='bold' >Contas por tipo</Text>
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
