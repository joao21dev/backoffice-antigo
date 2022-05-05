import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const NavAccountItem = (props: any) => {
  return (
    // <GridItem w="100%" borderRadius="15px">
    <NavLink
      className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
      to={`/${props.to}`}
    >
      <Flex
        p="4"
        cursor="pointer"
        fontWeight="medium"
        justifyContent="center"
        alignItems="center"
        align="center"
        
     
        borderRadius="lg"
        role="group"
        
      >
        <Text borderRadius="15px">{props.name}</Text>
      </Flex>
    </NavLink>
  );
};

export default NavAccountItem;
