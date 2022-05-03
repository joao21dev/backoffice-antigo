import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const NavItemWrapper = (props: any) => {
  return (
    <GridItem w="100%" borderRadius="15px">
      <Box>
        <Flex
          p="4"
          borderRadius="15px"
          cursor="pointer"
          _hover={{
            bg: "#5A32EA",
            color: "white",
          }}
          align="center"
          fontWeight="medium"
        >
          <Text>{props.name}</Text>
        </Flex>
      </Box>
    </GridItem>
  );
};

export default NavItemWrapper;
