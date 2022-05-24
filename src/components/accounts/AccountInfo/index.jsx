import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchUsersInfo } from "../../../redux";

const AccountInfo = () => {
  const userData = useSelector((state) => state.userInfo.usersInfo);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUsersInfo(id));
  }, [dispatch]);
  
  console.log('account info data atual: ', userData);

  return (
    <Box
      fontWeight="medium"
      p="2"
      boxShadow="md"
      borderRadius="15px"
      mt="15px"
      bg="white"
      h="140px"
      color="black"
    >
      <Text m="2">Id Conta: {userData.firstName}</Text>
      <Text m="2">Data de abertura: {userData.birthDate}</Text>
      <Text m="2">Data de última atualização: {userData.bank && userData.bank.cardExpire}</Text>
    </Box>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   const { id } = useParams();
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };

export default AccountInfo;
