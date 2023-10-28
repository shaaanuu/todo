import React, { Component } from "react";
import NewTaskBtn from "../new-task-btn/New-Task-Btn";
import "./ToDo-Section.css";

class ToDoSection extends Component {
  state = {
    todoValue: "",
    values: ["Task 1", "Task 2", "Task 3"],
  };

  handleTaskSubmit = (todoValue) => {
    this.setState((prevState) => {
      if (!prevState.values.includes(todoValue) && todoValue != "") {
        const newValues = [...prevState.values, todoValue];
        return { values: newValues, todoValue: "" };
      }
      return null;
    });
  };

  handleTaskChange = (event) => {
    this.setState({ todoValue: event.target.value });
  };

  render() {
    return (
      <div className="Todo-section">
        <ul className="todo">
          {this.state.values.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <NewTaskBtn
          todoValue={this.state.todoValue}
          onTaskSubmit={this.handleTaskSubmit}
          onTaskChange={this.handleTaskChange}
        />
      </div>
    );
  }
}

export default ToDoSection;
