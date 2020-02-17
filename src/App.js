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

  handleDeleteTodo = (event, todoIdToDelete) => {
    console.log("Deleted");
    const newToDoList = this.state.todos.filter(todo => {
      if (todo.id === todoIdToDelete) {
        return false;
      }
      return true;
    });

    this.setState({ todos: newToDoList });
  };
  handleToggleComplete = (event, todoIdToToggle) => {
    const newTodos = this.state.todos.slice();
    const newnewTodos = newTodos.map(todo => {
      if (todo.id === todoIdToToggle) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: newnewTodos });
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
        {/* / equals https://leanne_benson.gitlab.io/assessment-todo-app-pt2 */}
        <Route exact path="/">
          <TodoList
            todos={this.props.todos}
            handleToggleComplete={this.handleToggleComplete}
            handleDeleteTodo={this.handleDeleteTodo}
            //handleDeleteAllTodo={this.handleDeleteAllTodo}
          />
        </Route>
        {/* /active equals https://leanne_benson.gitlab.io/assessment-todo-app-pt2/active*/}
        <Route exact path="/active">
          <TodoList
            handleToggleComplete={this.handleToggleComplete}
            handleDeleteTodo={this.handleDeleteTodo}
            todos={this.props.todos.filter(todo => todo.completed === false)}
            //handleDeleteAllTodo={this.handleDeleteAllTodo}
          />
        </Route>
        {/* /completed equals https://leanne_benson.gitlab.io/assessment-todo-app-pt2/completed*/}
        <Route exact path="/completed">
          <TodoList
            handleToggleComplete={this.handleToggleComplete}
            handleDeleteTodo={this.handleDeleteTodo}
            todos={this.props.todos.filter(todo => todo.completed === true)}
            //handleDeleteAllTodo={this.handleDeleteAllTodo}
          />
        </Route>
        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count">
            <strong>
              {
                this.state.todos.filter(todo => {
                  //return something true or false should show the amount left in todo list to be complted
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
//this.props.todos
const mapStateToProps = state => {
  return {
    todos: state.todos //array of todo objects
  }
};
//this.props.addTodo
const mapDispatchToProps = {
  addTodo,
  clearCompletedTodos
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
