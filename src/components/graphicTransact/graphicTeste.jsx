import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Box, Flex, Text } from "@chakra-ui/react";


const data = [
  {
    month: 'Jan',
    quantidade: 2400,

  },
  {
    month: 'Fev',
    quantidade: 1398,

  },
  {
    month: 'Mar',
    quantidade: 9800,

  },
  {
    month: 'Apr',
    quantidade: 3908,

  },
  {
    month: 'May',
    quantidade: 4800,

  },
  {
    month: 'Jun',
    quantidade: 3800,

  },
  {
    month: 'Jul',
    quantidade: 4300,

  },
  {
    month: 'Ago',
    quantidade: 4300,

  },
  {
    month: 'Sep',
    quantidade: 4300,

  },
  {
    month: 'Oct',
    quantidade: 4300,

  },
  {
    month: 'Nov',
    quantidade: 4300,

  },
  {
    month: 'Dec',
    quantidade: 4300,

  },
];

export default function Graphic() {


    return (
      <>
      <Flex justifyContent='center'>
      <Box h='450px' justifyContent='center'>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
         
          <XAxis dataKey="month" />
          
          <Tooltip />
          <Legend />
          <Bar dataKey="quantidade" fill="#5932EA" />
        </BarChart>
        </Box>
    </Flex>
    </>
    
    );
}