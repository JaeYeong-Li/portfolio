import { combineReducers } from "redux";
import setting from "./setting";
import skill from "./skill";
import project from "./project";
const rootReducer = combineReducers({
  setting,
  skill,
  project,
});

export default rootReducer;
