// it
// expect
// describe
// beforeEach
// afterEach
import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import TodoEditor from "../components/TodoEditor/TodoEditor";
import TodoList from "../components/TodoList/TodoList";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  // ## App
  // ### renders a TodoEditor
  // - mock App
  // - expect to find 1 TodoEditor
  it("renders a TodoEditor", () => {
    expect(wrapper.find(TodoEditor).length).toBe(1);
  });

  // ### does not render a TodoList when there are no todos
  // - mock App
  // - set state to `todos: []`
  // - expect to find 0 TodoList
  it("does not render a TodoList when there are no todos", () => {
    wrapper.setState({ todos: [] });

    expect(wrapper.find(TodoList).length).toBe(0);
  });

  // ### renders a TodoList when there is at least one todo
  // - mock App
  // - set state to `todos: ['first todo']`
  // - expect to find 1 TodoList
  it("renders a TodoList when there is at least one todo", () => {
    wrapper.setState({ todos: ["first todos"] });

    expect(wrapper.find(TodoList).length).toBe(1);
  });
});
