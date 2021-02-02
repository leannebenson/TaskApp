import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={(event) =>
              this.props.handleToggleTodo(event, this.props.id)
            }
          />
          <label>{this.props.title}</label>
          <button className="priorityHigh">High</button>
          <button className="priorityMed">Medium</button>
          <button className="priorityLow">Low</button>
          <button className="destroy" onClick={this.props.handleDeleteTodo} />
        </div>
      </li>
    );
  }
};

export default TodoItem;

