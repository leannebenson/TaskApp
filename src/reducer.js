import todosList from "./todos.json";
import { ADD_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS, TOGGLE_TODO} from "./actions"
const initialState = {
  todos: todosList
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodoList = state.todos.slice();
      newTodoList.push(action.payload);
      return { todos: newTodoList };
    }
    case CLEAR_COMPLETED_TODOS: {
      const newTodoList = state.todos.filter(todo => {
        if (todo.completed === true) {
          return false;
        }
        return true;
      });
      return { todos: newTodoList };
    }
    case TOGGLE_TODO: {
    }
    case DELETE_TODO: {
    }

    default:
      return state;
  }
};

export default todosReducer

