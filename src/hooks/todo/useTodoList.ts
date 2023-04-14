import React, { useCallback, useContext, useEffect } from 'react'
import TodoApi from '../../api/todo/Todo.Api';
import TodoContext from '../../context/todoContext';
import { Todo } from '../../types/todo';

const useTodoList = () => {
    const { todos, initTodos, modifyTodo, deleteTodo } = useContext(TodoContext);

    const getTodos = useCallback(async () => {
        try {
            const data = await TodoApi.getTodos();
            initTodos(data);
        } catch (error) {
            alert("todolist를 가져오는데 실패하였습니다");
        }
    }, [initTodos]);

    useEffect(() => {
        getTodos();
    }, []);

    const modifyTodoHandler = async (item: Todo) => {
        try {
            const modifiedTodo = await TodoApi.modifyTodo({
                todoId: item.id,
                isCompleted: item.isCompleted,
                todo: item.todo,
            });
            modifyTodo(modifiedTodo);
        } catch (error) {
            alert("todo수정을 실패았습니다.");
        }
    };

    const deleteTodoHandler = async (todoId: number) => {
        try {
            await TodoApi.deleteTodo(todoId);
            deleteTodo(todoId);
        } catch (error) {
            alert("todo삭제를 실패하였습니다");
        }
    };
    return {
        todos,
        modifyTodoHandler,
        deleteTodoHandler
    }
}

export default useTodoList