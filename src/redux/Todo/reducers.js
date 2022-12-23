import { todoConstants } from "./constant";

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};
export default function todoList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case todoConstants.TODO_ADD_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload,
      };
    case todoConstants.TODO_ADD_FAILURE:
      return {
        loading: false,
        error: true,
        data: action.payload,
      };
    case todoConstants.TODO_CHECKED_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
