import axios from "axios";
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

export const fetchUsersInfo = (id) => {
  return (dispatch) => {
    dispatch(fetchUsersInfoRequest);
    axios
      .get(`https://omssxfdlgh.execute-api.us-east-1.amazonaws.com/users/${id}`)
      .then((response) => {
        const usersInfo =  response.data;
        dispatch(fetchUsersInfoSuccess(usersInfo));
        console.log('UsersInfo atual ', usersInfo)

      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersInfoFailute(errorMsg));
      });
  };
};


