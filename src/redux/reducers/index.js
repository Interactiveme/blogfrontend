import { combineReducers } from "redux";
import auth from "./auth";
import blog from "./posts";
import categories from "./categories";

export default combineReducers({ auth, blog, categories });
