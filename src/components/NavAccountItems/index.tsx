import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavAccountItem = (props: any) => {
  return (
    <GridItem w="100%" borderRadius="15px">
      <Link to={`/${props.to}`}>
        <Flex
          p="4"
          borderRadius="15px"
          cursor="pointer"
          _hover={{
            bg: "#5A32EA",
            color: "white",
          }}
          align="center"
          fontWeight='medium'
        >
          <Text>{props.name}</Text>
        </Flex>
      </Link>
    </GridItem>
  );
};


export default NavAccountItem;
