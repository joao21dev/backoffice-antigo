import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import userInfoReducer from "./userInfo/userInfoReducer";

const rootReducer = combineReducers({
  user: userReducer,
  userInfo: userInfoReducer,
});

export default rootReducer;
