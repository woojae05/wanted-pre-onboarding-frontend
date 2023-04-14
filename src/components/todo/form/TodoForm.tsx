import { Container } from "./todoForm.style";
import Input from "../../common/input/Input";
import { useTodoForm } from "../../../hooks/todo/useTodoForm";
import Button from "../../common/button/Button";

const TodoForm = () => {
  const { newTodo, newTodoInputRef, handleSubmit, handleChange } =
    useTodoForm();
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          value={newTodo}
          ref={newTodoInputRef}
          type={"text"}
          name="new-todo"
          data-testid="new-todo-input"
          onChange={handleChange}
        />
        <Button type="submit" data-testid="new-todo-add-button">
          추가
        </Button>
      </form>
    </Container>
  );
};

export default TodoForm;
