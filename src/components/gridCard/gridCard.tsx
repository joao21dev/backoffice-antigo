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
} from "@chakra-ui/react";
import ChartStatus from "../graphicStatusAccount/graphic";
import ChartSort from "../graphicSortAccount/graphic";

import Graphic from "../graphicTransact/graphic";
// import GraphicTeste from '../graphicTransact/graphicTeste';
import { FiChevronDown } from "react-icons/fi";

const GridCard = () => {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        m="15"
      >
        <GridItem colSpan={3} bg="white" h="370px" w="100%" borderRadius="15px">
          <Box display="flex" justifyContent="space-between" m="15px">
            <Box m="2">
              <Text fontWeight="bold" fontSize="25px">
                Transações
              </Text>
              <Text fontWeight="light">Volume Anual</Text>
            </Box>
          </Box>

          <Box>
            <Graphic />
            {/* <GraphicTeste/> */}
          </Box>
        </GridItem>
        <GridItem colSpan={2} h="370px" bg="white" borderRadius="15px">
          <ChartStatus />
        </GridItem>

        <GridItem colSpan={3} h="370px" bg="transparent" borderRadius="15px">
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            <GridItem
              colSpan={1}
              h="250px"
              bg="blue"
              borderRadius="15px"
            ></GridItem>
            <GridItem
              colSpan={1}
              h="250px"
              bg="blue"
              borderRadius="15px"
            ></GridItem>
            <GridItem
              colSpan={1}
              h="250px"
              bg="blue"
              borderRadius="15px"
            ></GridItem>

            <GridItem
              colSpan={1}
              h="250px"
              bg="blue"
              borderRadius="15px"
            >
                
            </GridItem>
            <GridItem colSpan={2} h="120px" bg="orange" borderRadius="15px">
              <Box display="flex" justifyContent="space-between" m="15px">
                <Box m="2">
                  <Text fontWeight="light">Total de contas</Text>
                  <Text fontWeight="bold" fontSize="25px">
                    5882
                  </Text>
                  <Box></Box>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={2} h="120px" bg="orange" borderRadius="15px">
              <Box display="flex" justifyContent="space-between" m="15px">
                <Box m="2">
                  <Text fontWeight="light">Total de cartões ativos</Text>
                  <Text fontWeight="bold" fontSize="25px">
                    4582
                  </Text>
                  <Box></Box>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem colSpan={2} h="370px" bg="white" borderRadius="15px">
          <ChartSort />
        </GridItem>
      </Grid>
    </>
  );
};

export default GridCard;
