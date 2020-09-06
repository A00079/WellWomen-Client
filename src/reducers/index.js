import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import emailConfirmation from "./emailConfirmation";
import authAdmin from "./authAdmin";



export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  msg:emailConfirmation,
  is_admin:authAdmin
});
