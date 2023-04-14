import Button from "../../common/button/Button";
import { Todo } from "../../../types/todo";
import { Item } from "./todoItem.style";
import useTodoItem from "../../../hooks/todo/useTodoItem";
import Input from "../../common/input/Input";

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const {
    isModifyMode,
    modifyTodoInput,
    handleChangeModifyIsCompleted,
    handCancelModfyMode,
    handleChangeInput,
    handleDeleteTodo,
    handleModifyTodo,
    handleOnModifyMode,
  } = useTodoItem(item);
  return (
    <>
      <Item isCompleted={item.isCompleted}>
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={handleChangeModifyIsCompleted}
        />
        {isModifyMode ? (
          <>
            <Input
              value={modifyTodoInput}
              onChange={handleChangeInput}
              autoFocus
            />
            <Button data-testid="modify-button" onClick={handleModifyTodo}>
              제출
            </Button>
            <Button data-testid="delete-button" onClick={handCancelModfyMode}>
              취소
            </Button>
          </>
        ) : (
          <>
            <span>{item.todo}</span>
            <Button data-testid="modify-button" onClick={handleOnModifyMode}>
              수정
            </Button>
            <Button data-testid="delete-button" onClick={handleDeleteTodo}>
              삭제
            </Button>
          </>
        )}
      </Item>
    </>
  );
};

export default TodoItem;
