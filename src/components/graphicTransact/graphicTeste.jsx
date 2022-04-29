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
            <ChartTotalCards />
          </GridItem>
          <GridItem colSpan={2} bg="white" borderRadius="15px" boxShadow="lg">
            <ChartTotalCards />
          </GridItem>
        </Grid>