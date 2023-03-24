import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todoReducer";

export const rootReducer = combineReducers(
    {
        todoState: todosReducer,
        filterState: filterReducer
    }
)