import axios from "axios";
import api from "../../services/api";
import {
  FETCH_USERS_INFO_FAILURE,
  FETCH_USERS_INFO_REQUEST,
  FETCH_USERS_INFO_SUCCESS,
} from "./userInfoTypes";

export const fetchUsersInfoRequest = () => {
  return {
    type: FETCH_USERS_INFO_REQUEST,
  };
};
const fetchUsersInfoSuccess = (usersInfo) => {
  return {
    type: FETCH_USERS_INFO_SUCCESS,
    payload: usersInfo,
  };
};
const fetchUsersInfoFailute = (error) => {
  return {
    type: FETCH_USERS_INFO_FAILURE,
    payload: error,
  };
};

export const fetchUsersInfo =  (id) => {
console.log("teste")
  return async (dispatch) => {
    dispatch(fetchUsersInfoRequest);
    await api
      .get(`/onboarding/accounts/${id}`,{
        headers:{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization": "Bearer " + localStorage.getItem("access_token"),
      }
      })
      .then((response) => {
        const usersInfo =  response.data;
        dispatch(fetchUsersInfoSuccess(usersInfo));

      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersInfoFailute(errorMsg));
      });
  };
};


