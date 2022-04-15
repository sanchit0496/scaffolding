import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const reducers = combineReducers({
    User: UserReducer
})
export default reducers;