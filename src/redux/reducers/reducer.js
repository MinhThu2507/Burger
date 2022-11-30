import { combineReducers } from "redux";
import burgerReducer from "./burger";

const rootReducer = combineReducers({
    burger: burgerReducer,
})

export default rootReducer

