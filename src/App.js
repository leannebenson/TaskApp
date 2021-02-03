import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import { Route, NavLink} from "react-router-dom";
import TodoList from "./todolist";
import { connect } from "react-redux";
import { addTodo, clearCompletedTodos } from "./actions"

class App extends Component {
  //this.state.todos - app component state
  //this.props.todos - redux state
  state = {
    todos: todosList
  };
  handleDeleteAllTodo = event => {
    console.log("Delete All");
    this.props.clearCompletedTodos()
  };

  handleAddToDo = event => {
    if (event.key === "Enter") {
      this.props.addTodo(event.target.value);
      event.target.value = "";
    }
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyDown={this.handleAddToDo}
            autoFocus
          />
        </header>
        <Route exact path="/">
          <TodoList
            todos={this.props.todos}
          />

        </Route>
        <Route exact path="/active">
          <TodoList
            todos={this.props.todos.filter(todo => todo.completed === false)}
          />
        </Route>
        <Route exact path="/completed">
          <TodoList
            todos={this.props.todos.filter(todo => todo.completed === true)}
          />
        </Route>
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {
                this.state.todos.filter(todo => {
                  if (todo.completed === true) {
                    return false;
                  }
                  return true;
                }).length
              }
            </strong>{" "}
            item(s) left
          </span>
          <ul className="filters">
            <li>
              <NavLink to="/" exact activeClassName="selected">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/active" activeClassName="selected">
                Active
              </NavLink>
            </li>
            <li>
              <NavLink to="/completed" activeClassName="selected">
                Completed
              </NavLink>
            </li>
          </ul>
          <button
            className="clear-completed"
            onClick={this.handleDeleteAllTodo}
          >
            Clear completed
          </button>
        </footer>
      </section>
    );
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todos 
  }
};

const mapDispatchToProps = {
  addTodo,
  clearCompletedTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
