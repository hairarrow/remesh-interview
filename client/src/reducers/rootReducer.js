import { combineReducers } from "redux";
import fetchData from "./fetchData";
import reverseArray from "./reverseArray";

export default combineReducers({
  reverseArray,
  fetchData
});
