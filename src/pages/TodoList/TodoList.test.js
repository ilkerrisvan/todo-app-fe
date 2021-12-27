import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";

import { Provider } from "react-redux";
import { findByTestAttribute, mockStore } from "../../test";
import { MOCK_TODO } from "../../app-consts";

import TodoList from "./index";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState = {}, props) => {
  const store = mockStore(initialState);
  return shallow(
    <Provider store={store}>
      <TodoList {...props} />
    </Provider>
  );
};

describe("unit and snapshot tests for todo page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ todosReducer: { todos: [MOCK_TODO] } });
  });
  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render non-empty component", () => {
    const inputComponent = findByTestAttribute(wrapper, "todo-page-wrapper");
    expect(inputComponent).toBeDefined();
  });
  it("should render todo list item", () => {
    const inputComponent = findByTestAttribute(wrapper, "todo-list-item");
    expect(inputComponent).toBeDefined();
  });
});
