import { combineReducers } from "redux";
import noteReducer from "./noteSlice"; // Adjust the path

const rootReducer = combineReducers({
    noteReducer, // You can have other reducers here as well
});

export default rootReducer;
