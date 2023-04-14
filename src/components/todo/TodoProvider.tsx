import { ReactNode, useState } from "react";
import TodoContext from "../../context/todoContext";
import { Todo } from "../../types/todo";

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const initTodos = (todos: Todo[]) => {
    setTodos(todos);
  };

  const createTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const modifyTodo = (modifyTodo: Todo) => {
    const newTodos = todos.map((todo) =>
      todo.id === modifyTodo.id ? { ...modifyTodo } : todo
    );

    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, initTodos, createTodo, modifyTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
