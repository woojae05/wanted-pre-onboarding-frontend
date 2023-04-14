import { createContext } from 'react';
import { Todo } from '../types/todo';

interface TodoContextProps {
    todos: Todo[];
    initTodos: (todos: Todo[]) => void
    createTodo: (newTodo: Todo) => void;
    modifyTodo: (modifyTodo: Todo) => void
    deleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextProps>({
    todos: [],
    initTodos: () => { },
    createTodo: () => { },
    modifyTodo: () => { },
    deleteTodo: () => { },
});


export default TodoContext;