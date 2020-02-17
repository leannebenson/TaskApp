import React from "react";
import TodoItem from "./todoitem"
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
                this.props.handleDeleteTodo(event, todo.id)
              }
            />
          ))}
        </ul>
      </section>
    );
  }
};

export default TodoList;