import React from "react";
import { shallow } from "enzyme";
import TodoEditor from "../TodoEditor";

describe("TodoEditor component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoEditor />);
  });

  //   ### renders an input and a button
  // - mock TodoEditor
  // - expect to find 1 input[type="text"]
  // - expect to find 1 button[type="submit"]
  it("renders an input and a button", () => {
    expect(wrapper.find('input[type="text"]').length).toBe(1);
    expect(wrapper.find('button[type="submit"]').length).toBe(1);
  });

  describe("events", () => {
    const todoText = "todos";
    beforeEach(() => {
      const changeEventMock = {
        currentTarget: {
          value: todoText
        }
      };

      wrapper.find('input[type="text"]').simulate("change", changeEventMock);
      wrapper.update();
    });

    //   ### can enter text into an input
    // - find input[type="text"]
    // - simulate "change" event with simulate()
    // - provide a fake event object and feed text to input
    // - force the component to update with update()
    // - assert that input value has changed with prop()
    it("can enter text into an input", () => {
      expect(wrapper.find('input[type="text"]').prop("value")).toBe(todoText);
    });

    //   ### on form submit, input should get emptied
    // - find input[type="text"]
    // - simulate "change" event with simulate()
    // - provide a fake event object and feed text to input
    // - find form
    // - simulate "submit" event
    // - provide a fake event object and feed props to component
    // - force component to update
    // - assert that input value has changed
    it("on form submit, input should get emptied", () => {
      expect(wrapper.find('input[type="text"]').prop("value")).toBe(todoText);

      const submitEventMock = {
        preventDefault: () => null
      };
      const props = {
        onSave: () => null
      };

      wrapper.setProps(props);
      wrapper.find("form").simulate("submit", submitEventMock);
      wrapper.update();
      expect(wrapper.find('input[type="text"]').prop("value")).toBe("");
    });
  });

  //   ### onSave prop has been called
  // - find form
  // - simulate "submit" event
  // - provide a fake event object and feed props to component
  // - assert that mocks were called once
  describe("callbacks", () => {
    it("onSave prop has been called", () => {
      const submitEventMock = {
        preventDefault: () => null
      };
      const onSavePropMock = jest.fn();
      const props = {
        onSave: onSavePropMock
      };

      wrapper.setProps(props);
      wrapper.find("form").simulate("submit", submitEventMock);

      expect(onSavePropMock.mock.calls.length).toBe(1);
    });
  });
});
