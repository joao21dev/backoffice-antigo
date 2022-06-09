import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import todoReducer from "./todo/todoReducer";
import userInfoReducer from "./userInfo/userInfoReducer";

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  userInfo: userInfoReducer,
});

export default rootReducer;
