import { todoConstants } from "./constant";


export const  todoActions={
    addTodo,
    checkedTodo,
}
export  function addTodo(payload){
    return {
        type:todoConstants.TODO_ADD_SUCCESS,
        payload
    }
}

export  function checkedTodo(payload){
    return {
        type:todoConstants.TODO_CHECKED_SUCCESS,
        payload
    }
}