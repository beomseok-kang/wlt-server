import { combineReducers } from "redux";
import window from "./window";
import chat from "./chat";

const rootReducer = combineReducers({
  window,
  chat,
});

export default rootReducer;
