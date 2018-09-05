import { combineReducers } from "redux";
import session from "./session";
import reverseArray from "./reverseArray";
import filter from "./filter";

export default combineReducers({
  filter,
  reverseArray,
  session
});
