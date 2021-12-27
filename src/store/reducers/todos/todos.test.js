import { GET_TODOS, PENDING, FULFILLED, REJECTED, CREATE_TODO } from "../../../app-consts";
import { TODOS_INITIAL_STATE, MOCK_TODO } from "../../../app-consts/test-consts";
import todosReducer from "./index";

describe("unit tests for todos reducer", () => {
  it("should return initial state object when state and action is undefined", () => {
    expect(todosReducer(undefined, {})).toEqual(TODOS_INITIAL_STATE);
  });

  it("should update the state on PENDING by fetching the todos", () => {
    const expectedAction = {
      type: `${GET_TODOS}${PENDING}`,
      payload: [MOCK_TODO],
    };
    expect(todosReducer(TODOS_INITIAL_STATE, expectedAction)).toEqual({
      ...TODOS_INITIAL_STATE,
    });
  });
  it("should update the state on FULFILLED by fetching the todos", () => {
    const expectedAction = {
      type: `${GET_TODOS}${FULFILLED}`,
      payload: [MOCK_TODO, MOCK_TODO],
    };
    expect(todosReducer(TODOS_INITIAL_STATE, expectedAction)).toEqual({
      ...TODOS_INITIAL_STATE,
      todos: [...expectedAction.payload],
    });
  });
  it("should update the state on REJECTED by fetching the todos", () => {
    const expectedAction = {
      type: `${GET_TODOS}${REJECTED}`,
      payload: [MOCK_TODO],
    };
    expect(todosReducer(TODOS_INITIAL_STATE, expectedAction)).toEqual({
      ...TODOS_INITIAL_STATE,
    });
  });
  it("should update the state on PENDING by creating todo", () => {
    const expectedAction = {
      type: `${CREATE_TODO}${PENDING}`,
      payload: [MOCK_TODO],
    };
    expect(todosReducer(TODOS_INITIAL_STATE, expectedAction)).toEqual({
      ...TODOS_INITIAL_STATE,
    });
  });
  it("should update the state on FULFILLED by creating todo", () => {
    const expectedAction = {
      type: `${CREATE_TODO}${FULFILLED}`,
    };
    expect(todosReducer(TODOS_INITIAL_STATE, expectedAction)).toEqual({
      ...TODOS_INITIAL_STATE,
    });
  });
  it("should update the state on REJECTED by creating todo", () => {
    const expectedAction = {
      type: `${CREATE_TODO}${REJECTED}`,
    };
    expect(todosReducer(TODOS_INITIAL_STATE, expectedAction)).toEqual({
      ...TODOS_INITIAL_STATE,
    });
  });
});
