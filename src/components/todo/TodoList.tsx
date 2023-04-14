import useTodoList from "../../hooks/todo/useTodoList";
import TodoItem from "./item/TodoItem";
import { Container } from "./todoList.style";

const TodoList = () => {
  const { todos, modifyTodoHandler, deleteTodoHandler } = useTodoList();
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          modifyTodoHandler={modifyTodoHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      ))}
    </Container>
  );
};

export default TodoList;
