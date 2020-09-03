import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import emailConfirmation from "./emailConfirmation";


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  msg:emailConfirmation
});
