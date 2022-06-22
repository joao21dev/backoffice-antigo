import React, { useEffect, useState } from "react";

import { Box, Text } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAccountFailute, fetchUsersAccountSuccess, fetchUsersInfo } from "../../../redux";
import AccountsFormPersonalData from "../AccountsFormPersonalData";
import AccountsFormAddress from "../AccountsFormAddress";
import api from "../../../services/api";

const AccountInfo = () => {

  const [userData,setUserData ]= useState({})

  const dispatch = useDispatch();

  const { id } = useParams();



 useEffect(() => {
  fetchUsersInfo()
  }, []);

  

  const fetchUsersInfo = async () => {
    
      await api
        .get(`/onboarding/accounts/${id}`,{
          headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer " + localStorage.getItem("access_token"),
        }
        })
        .then((response) => {

          setUserData(response.data)
  
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchUsersAccountFailute(errorMsg));
        });
    
  };


  return (
    <>
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
      <Text m="2">Id Conta: {userData.socialName}</Text>
      <Text m="2">Data de abertura: {userData.birthDate}</Text>
      <Text m="2">
        
      </Text>
    </Box>
      </>
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
