import { combineReducers } from "redux";
import session from "./session";
import filter from "./filter";

export default combineReducers({
  filter,
  session
});
