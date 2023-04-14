import React, { useState } from 'react'
import { Todo } from '../../types/todo';

export const useTodoItem = (item: Todo) => {
    const [isModifyMode, setIsModifyMode] = useState(false);
    const [modifyTodo, setModifyTodo] = useState(item.todo);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setModifyTodo(event.target.value);

    const handleModifyTodo = () => {
        // modifyTodoHandler({ ...item, todo: modifyTodo });
        setIsModifyMode(false);
    };
    return {

    }


}
