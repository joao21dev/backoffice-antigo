import { Box, Text } from "@chakra-ui/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAccountInfo, fetchUsersInfo } from "../../../redux";

const InfoBankAccount = () => {


  const userData = useSelector((state) => state.userInfo.usersInfo);
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(async () => {
    dispatch(fetchUsersInfo(id));
  }, []);

  useEffect(async () => {
    dispatch(fetchAccountInfo(id));
  }, [userData]);
  

  return (
    <>
      {" "}
      <Box
        fontWeight="medium"
        p="2"
        boxShadow="md"
        borderRadius="15px"
        mt="15px"
        bg="white"
        h="50%"
        color="black"
      >
        <Text m="2">Banco: {userData.id}</Text>
        <Text m="2">Agência: {userData.account[0].branch}</Text>
        <Text m="2">Conta:</Text>
        <Text m="2">Status:</Text>
      </Box>
    </>
  );
};

export default InfoBankAccount;
