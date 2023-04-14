import { useCallback, useContext, useEffect } from 'react'
import TodoApi from '../../api/todo/Todo.Api';
import TodoContext from '../../context/todoContext';

const useTodoList = () => {
    const { todos, initTodos } = useContext(TodoContext);

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


    return {
        todos,
    }
}

export default useTodoList