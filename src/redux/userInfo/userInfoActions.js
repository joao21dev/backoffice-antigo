import axios from "axios";
import api from "../../services/api";
import {
  FETCH_USERS_ACCOUNT_FAILURE,
  FETCH_USERS_ACCOUNT_SUCCESS,
  FETCH_USERS_INFO_FAILURE,
  FETCH_USERS_INFO_REQUEST,
  FETCH_USERS_INFO_SUCCESS,
} from "./userInfoTypes";

export const fetchUsersInfoRequest = () => {
  return {
    type: FETCH_USERS_INFO_REQUEST,
  };
};
export const fetchUsersInfoSuccess = (usersInfo) => {
  return {
    type: FETCH_USERS_INFO_SUCCESS,
    payload: usersInfo,
  };
};
export const fetchUsersInfoFailute = (error) => {
  return {
    type: FETCH_USERS_INFO_FAILURE,
    payload: error,
  };
};

export const fetchUsersAccountSuccess = (usersInfo) => {
  return {
    type: FETCH_USERS_ACCOUNT_SUCCESS,
    payload: usersInfo,
  };
};
export const fetchUsersAccountFailute = (error) => {
  return {
    type: FETCH_USERS_ACCOUNT_FAILURE,
    payload: error,
  };
};

export const fetchUsersInfo =  (id) => {

  return async (dispatch) => {
  
    await api
      .get(`/onboarding/accounts/${id}`,{
        headers:{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization": "Bearer " + localStorage.getItem("access_token"),
      }
      })
      .then((response) => {

        dispatch(fetchUsersAccountSuccess(response.data));

      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersAccountFailute(errorMsg));
      });
  };
};


export const fetchAccountInfo =  (id) => {

  return async (dispatch) => {
    dispatch(fetchUsersInfoRequest);
    await api
      .get(`/accounts/${id}`,{
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


