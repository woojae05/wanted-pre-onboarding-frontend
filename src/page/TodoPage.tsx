import TodoForm from "../components/todo/form/TodoForm";
import TodoProvider from "../components/todo/TodoProvider";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {
  return (
    <div className="page">
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default TodoPage;
