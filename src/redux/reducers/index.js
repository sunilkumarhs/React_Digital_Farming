import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SoilTestReducer from "./SoilTestReducer";

const reducers = combineReducers ({
    log : LoginReducer,
    soil : SoilTestReducer,
});

export default reducers;