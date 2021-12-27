import { CREATE_TODO, FULFILLED, GET_TODOS, PENDING, REJECTED } from "../../../app-consts";

const initialState = {
  todos: [],
};
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TODOS}${PENDING}`:
      return {
        ...state,
        todos: [],
      };
    case `${GET_TODOS}${FULFILLED}`:
      return {
        ...state,
        todos: action.payload,
      };
    case `${GET_TODOS}${REJECTED}`:
      return {
        ...state,
        todos: [],
      };
    case `${CREATE_TODO}${PENDING}`:
      return {
        ...state
      };
    case `${CREATE_TODO}${FULFILLED}`:
      return {
        ...state
      };
    case `${CREATE_TODO}${REJECTED}`:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default todosReducer;
