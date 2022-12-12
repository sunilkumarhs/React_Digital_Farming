import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";

const reducers = combineReducers ({
    log : LoginReducer,
});

export default reducers;