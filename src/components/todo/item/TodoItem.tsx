import Button from "../../common/button/Button";
import { Todo } from "../../../types/todo";
import { Item } from "./todoItem.style";
import Input from "../../common/input/Input";
import React, { useState } from "react";

interface TodoItemProps {
  item: Todo;
  modifyTodoHandler: (item: Todo) => {};
  deleteTodoHandler: (todoId: number) => {};
}

const TodoItem = ({
  item,
  modifyTodoHandler,
  deleteTodoHandler,
}: TodoItemProps) => {
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifyTodo, setModifyTodo] = useState(item.todo);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setModifyTodo(event.target.value);

  const handleModifyTodo = () => {
    if (modifyTodo.trim() !== "") {
      modifyTodoHandler({ ...item, todo: modifyTodo });
      setIsModifyMode(false);
    }
  };

  const handleModifyIsCompleted = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    modifyTodoHandler({ ...item, isCompleted: checked });
  };

  const handleChangeModifyMode = () => {
    setIsModifyMode(true);
  };

  return (
    <>
      <Item isCompleted={item.isCompleted}>
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={handleModifyIsCompleted}
        />
        {isModifyMode ? (
          <>
            <Input value={modifyTodo} onChange={handleChangeInput} autoFocus />
            <Button data-testid="modify-button" onClick={handleModifyTodo}>
              제출
            </Button>
            <Button
              data-testid="delete-button"
              onClick={() => {
                setIsModifyMode(false);
              }}
            >
              취소
            </Button>
          </>
        ) : (
          <>
            <span>{item.todo}</span>
            <Button
              data-testid="modify-button"
              onClick={handleChangeModifyMode}
            >
              수정
            </Button>
            <Button
              data-testid="delete-button"
              onClick={() => {
                deleteTodoHandler(item.id);
              }}
            >
              삭제
            </Button>
          </>
        )}
      </Item>
    </>
  );
};

export default TodoItem;
