import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import { FULFILLED, GET_TODOS, PENDING, MOCK_TODO, TODOS_INITIAL_STATE, CREATE_TODO } from "../../../app-consts";
import { axiosInstance } from "../../../utils";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { getTodos, createTodo } from "./index";

const baseState = {
  todosReducer: {
    ...TODOS_INITIAL_STATE,
  },
};
const middlewares = [promise, thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ todosReducer: [] });
    moxios.install(axiosInstance);
  });
  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });
  it("dispatches _FULFILLED and _PENDING on fetch todos", () => {
    const payload = [MOCK_TODO, MOCK_TODO];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: payload,
      }).then(() => {
        const expectedActions = [
          `${GET_TODOS}${PENDING}`,
          `${GET_TODOS}${FULFILLED}`,
        ];
        store = mockStore(baseState);
    
        return store.dispatch(getTodos({})).then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map((action) => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      });
    });
    
  });

  it("dispatches _FULFILLED and _PENDING on create todo", () => {
    const payload = {
      ...MOCK_TODO,
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: payload,
      }).then(()=>{
        const expectedActions = [
          `${CREATE_TODO}${PENDING}`,
          `${CREATE_TODO}${FULFILLED}`,
        ];
        store = mockStore(baseState);
    
        return store.dispatch(createTodo(payload)).then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map((action) => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      });
    });
  });
});
