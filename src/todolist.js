import React from "react";
import TodoItem from "./todoitem"
import { connect } from "react-redux"
import { deleteTodo } from "./actions"
class TodoList extends React.Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
              handleToggleComplete={this.props.handleToggleComplete}
              handleDeleteTodo={event =>
                this.props.deleteTodo(todo.id)
              }
            />
          ))}
        </ul>
      </section>
    );
  }
};

const mapDispatchToProps = {
  deleteTodo
};

export default connect(null, mapDispatchToProps)(TodoList);