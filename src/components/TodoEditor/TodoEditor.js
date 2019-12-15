import React, { Component } from "react";

class TodoEditor extends Component {
  state = {
    text: ""
  };

  textChangeHandler = e => {
    this.setState({
      text: e.currentTarget.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    const { onSave } = this.props;
    onSave(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" value={text} onChange={this.textChangeHandler} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default TodoEditor;
