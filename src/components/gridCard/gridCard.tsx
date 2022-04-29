import {
  Grid,
  GridItem,

  useMediaQuery,
} from "@chakra-ui/react";
import ChartStatus from "../graphicStatusAccount/graphic";
import ChartSort from "../graphicSortAccount/graphic";
import ChartTotalAccounts from "../graphicTotalAccounts/graphic";
import ChartTotalCards from "../graphicTotalCards/graphic";

import CardPix from "../cardPix/cardPix";
import CardTed from "../cardTed/cardTed";
import CardP2P from "../cardP2P/cardP2P";
import CardCompras from "../cardCompras/cardCompras";

import Graphic from "../graphicTransact/graphic";
// import GraphicTeste from '../graphicTransact/graphicTeste';
import { FiChevronDown, FiDollarSign } from "react-icons/fi";

const GridCard = () => {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
 {isLargerThan1280 ? <Grid
        m="15"
        h="750px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={5}
      >
        {" "}
        <GridItem
          colSpan={4}
          h="370px"
          bg="white"
          borderRadius="15px"
          boxShadow="lg"
        >
          {" "}
          <Graphic />{" "}
        </GridItem>
        <GridItem
          colSpan={2}
          h="370px"
          bg="white"
          borderRadius="15px"
          boxShadow="lg"
        >
          <ChartStatus />
        </GridItem>
        <GridItem
          colSpan={1}
          h="235px"
          bg="white"
          borderRadius="15px"
          boxShadow="lg"
        >
          <CardPix />
        </GridItem>
        <GridItem
          colSpan={1}
          h="235px"
          bg="white"
          borderRadius="15px"
          boxShadow="lg"
        >
          <CardP2P />
        </GridItem>
        <GridItem
          colSpan={1}
          h="235px"
          bg="white"
          borderRadius="15px"
          boxShadow="lg"
        >
           <CardTed />
         
        </GridItem>
        <GridItem
          colSpan={1}
          h="235px"
          bg="white"
          borderRadius="15px"
          boxShadow="lg"
        >
          <CardCompras />
        </GridItem>
        <GridItem
          colSpan={2}
          rowSpan={2}
          bg="white"
          borderRadius="15px"
          boxShadow="lg"
        >
          
          <ChartSort />
        </GridItem>
        <GridItem colSpan={2} bg="white" borderRadius="15px" boxShadow="lg">
        <ChartTotalAccounts />
        </GridItem>
        <GridItem colSpan={2} bg="white" borderRadius="15px" boxShadow="lg">
          <ChartTotalCards />
        </GridItem>
      </Grid> 
      :
      <Grid
      w="100%"
      m="15"
      h="750px"
      templateRows="repeat(7, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={5}
    >
      {" "}
      <GridItem
        colSpan={2}
        h="150px"
        bg="white"
        borderRadius="15px"
        boxShadow="lg"
      >
        {" "}
        <Graphic />{" "}
      </GridItem>
      <GridItem
        colSpan={2}
        h="370px"
        bg="white"
        borderRadius="15px"
        boxShadow="lg"
      >
        <ChartStatus />
      </GridItem>
      <GridItem
        colSpan={1}
        h="235px"
        bg="white"
        borderRadius="15px"
        boxShadow="lg"
      >
        <CardPix />
      </GridItem>
      <GridItem
        colSpan={1}
        h="235px"
        bg="white"
        borderRadius="15px"
        boxShadow="lg"
      >
        <CardTed />
      </GridItem>
      <GridItem
        colSpan={1}
        h="235px"
        bg="white"
        borderRadius="15px"
        boxShadow="lg"
      >
        <CardP2P />
      </GridItem>
      <GridItem
        colSpan={1}
        h="235px"
        bg="white"
        borderRadius="15px"
        boxShadow="lg"
      >
        <CardCompras />
      </GridItem>
      <GridItem
        colSpan={2}
       
        bg="white"
        borderRadius="15px"
        boxShadow="lg"
      >
        <ChartSort />
      </GridItem>
      <GridItem colSpan={2} bg="white" borderRadius="15px" boxShadow="lg">
        <ChartTotalAccounts />
      </GridItem>
      <GridItem colSpan={2} bg="white" borderRadius="15px" boxShadow="lg">
        <ChartTotalCards />
      </GridItem>
    </Grid>
    }
     

      
      
    </>
  );
};

export default GridCard;
