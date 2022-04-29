import {
    Box,
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
    labels: ["Ativo", "Pendentee", "Bloqueado", "Cancelado"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 30, 40],
        backgroundColor: ["#E3DD30", "#7730E3", "#2643F0", "#969102"],

  
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
  