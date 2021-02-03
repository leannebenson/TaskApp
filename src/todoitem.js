import React, { useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoItem extends React.Component {


  render() {
  // function setSelectedDate() {
  //   const [selectedDate, setDate] = useState(null);
  // }
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
          <button className="destroy" onClick={this.props.handleDeleteTodo} />
          {/* <DatePicker /> */}
          <button className="priorityHigh">High</button>
          <button className="priorityMed">Medium</button>
          <button className="priorityLow">Low</button>
        </div>
      </li>
    );
  }
};

export default TodoItem;

