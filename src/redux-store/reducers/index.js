import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const appReducer = combineReducers({
  user: userReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;