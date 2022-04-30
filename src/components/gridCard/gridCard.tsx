import { Box, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import Graphic from "../graphicTransact/graphic";
import Card from "../Card";

import { FiDollarSign as Pix } from "react-icons/fi";
import { FiShoppingCart as Compras } from "react-icons/fi";
import { RiBankLine as Ted } from "react-icons/ri";
import { BiTransfer as P2P } from "react-icons/bi";
import GridCardMobile from "../GridCardMobile";
import ChartAccounts from "../ChartAccounts";

import ChartCards from "../ChartCards";
import { dataAgencyCard, dataSortAccount, dataStatusAccount, dataStatusCard } from "../../chartData";

const GridCard = () => {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      {isLargerThan1280 ? (
        <Grid
          m="15"
          h="750px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(7, 1fr)"
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
            colSpan={3}
            h="370px"
            bg="white"
            borderRadius="15px"
            boxShadow="lg"
          >
            <ChartAccounts
              name={"Contas por status"}
              data={dataStatusAccount}
            />
          </GridItem>
          <GridItem
            colSpan={1}
            h="235px"
            bg="white"
            borderRadius="15px"
            boxShadow="lg"
          >
            <Card
              name={"Pix"}
              icon={Pix}
              color={"#008000"}
              bgColor={"#9AE6B4"}
              amount=" 3.700"
              percent="23%"
            />
          </GridItem>
          <GridItem
            colSpan={1}
            h="235px"
            bg="white"
            borderRadius="15px"
            boxShadow="lg"
          >
            <Card
              name={"Ted"}
              icon={Ted}
              color={"#FF0000"}
              bgColor={"#fcb6a4"}
              amount=" 87.200"
              percent="23%"
            />
          </GridItem>
          <GridItem
            colSpan={1}
            h="235px"
            bg="white"
            borderRadius="15px"
            boxShadow="lg"
          >
            <Card
              name={"P2P"}
              icon={P2P}
              bgColor={"#c4b0ff"}
              color={"#5932EA"}
              amount=" 26.470"
              percent="23%"
            />
          </GridItem>
          <GridItem
            colSpan={1}
            h="235px"
            bg="white"
            borderRadius="15px"
            boxShadow="lg"
          >
            <Card
              name={"Compras"}
              icon={Compras}
              bgColor={"#cfdcf9"}
              color="#3575FF"
              amount=" 3.700"
              percent="23%"
            />{" "}
          </GridItem>
          <GridItem
            colSpan={3}
            rowSpan={2}
            bg="white"
            borderRadius="15px"
            boxShadow="lg"
          >
            <Box mt="10%">
              <ChartAccounts name={"Contas por tipo"} mb='8%' data={dataSortAccount} />
            </Box>
          </GridItem>
          <GridItem colSpan={2} bg="white" borderRadius="15px" boxShadow="lg">
            <ChartCards name={"Cartões por status"} data={dataStatusCard} />
          </GridItem>
          <GridItem colSpan={2} bg="white" borderRadius="15px" boxShadow="lg">
            <ChartCards name={"Cartões por agência"} data={dataAgencyCard} />
          </GridItem>
        </Grid>
      ) : (
        <GridCardMobile />
      )}
    </>
  );
};

export default GridCard;
