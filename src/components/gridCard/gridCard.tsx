import {
  Box,
  Grid,
  GridItem,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Center,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import ChartStatus from "../graphicStatusAccount/graphic";
import ChartSort from "../graphicSortAccount/graphic";
import ChartTotalCards from "../graphicTotalAccounts/graphic";

import CardPix from "../cardPix/cardPix";
import CardTed from "../cardTed/cardTed";
import CardP2P from "../cardP2P/cardP2P";
import CardCompras from "../cardCompras/cardCompras";

import Graphic from "../graphicTransact/graphic";
// import GraphicTeste from '../graphicTransact/graphicTeste';
import { FiChevronDown, FiDollarSign } from "react-icons/fi";

const GridCard = () => {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

  return (
    <>
      {/* <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        m="15"
      >
        <GridItem
          colSpan={4}
          bg="white"
        
          borderRadius="15px"
        >
          <Box display="flex" justifyContent="space-between" m="15px">
            <Box m="2">
              <Text fontWeight="bold" fontSize="25px">
                Transações
              </Text>
              <Text fontWeight="light">Volume Anual</Text>
            </Box>
          </Box>

          <Graphic />
         
        </GridItem>
        <GridItem
          colSpan={2}
          
          bg="white"
          borderRadius="15px"
        >
          <ChartStatus />
        </GridItem>
      </Grid>
      
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid> */}

      <Grid
      m='15'
        h='755px'
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem colSpan={4} h='370px' bg="tomato" /> <GridItem colSpan={2} h='370px' bg="tomato" /> 
        <GridItem colSpan={1} h='220px' bg="tomato" /> <GridItem colSpan={1} h='220px' bg="tomato" /> <GridItem colSpan={1} h='220px' bg="tomato" /> <GridItem colSpan={1} h='220px' bg="tomato" /> <GridItem colSpan={2} h='370px'  rowSpan={2} bg="tomato" />
        <GridItem colSpan={2} h='120px' bg="tomato" /> <GridItem colSpan={2} h='120px' bg="tomato" />
        
        
        
        
        
        
        
      </Grid>
    </>
  );
};

export default GridCard;
