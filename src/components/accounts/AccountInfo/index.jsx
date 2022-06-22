import React, { useEffect } from "react";

import { Box, Text } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersInfo } from "../../../redux";
import AccountsFormPersonalData from "../AccountsFormPersonalData";
import AccountsFormAddress from "../AccountsFormAddress";

const AccountInfo = () => {
  const userData = useSelector((state) => state.userInfo.usersInfo);
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id)

  
  useEffect(() => {
    dispatch(fetchUsersInfo(id));
  }, []);



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
