import useTodoList from "../../hooks/todo/useTodoList";
import TodoItem from "./item/TodoItem";
import { Container } from "./todoList.style";

const TodoList = () => {
  const { todos } = useTodoList();
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </Container>
  );
};

export default TodoList;
