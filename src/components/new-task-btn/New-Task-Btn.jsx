import React, { Component } from "react";
import "./New-Task-Btn.css";

export default class NewTaskBtn extends Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onTaskSubmit(this.props.todoValue);
  };

  onChange = (event) => {
    this.props.onTaskChange(event);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          className="todo-input"
          name="todo"
          placeholder="Enter new Task"
          onChange={this.onChange}
          value={this.props.todoValue}
        />
        <button className="new-task-btn" onClick={this.onSubmit} type="submit">
          New Task
        </button>
      </form>
    );
  }
}
