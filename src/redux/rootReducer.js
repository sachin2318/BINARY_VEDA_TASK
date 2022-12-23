import { combineReducers } from "redux";
import TodoList from "./Todo/reducers";

const rootReducer= combineReducers({
    TodoList: TodoList,
})

export default rootReducer;