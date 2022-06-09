import {
  FETCH_USERS_INFO_FAILURE,
  FETCH_USERS_INFO_REQUEST,
  FETCH_USERS_INFO_SUCCESS,
} from "./userInfoTypes";

const initialState = {
  loading: false,
  usersInfo: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_INFO_SUCCESS:
      return {
        loading: false,
        usersInfo: action.payload,
        error: "",
      };
    case FETCH_USERS_INFO_FAILURE:
      return {
        loading: false,
        usersInfo: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
