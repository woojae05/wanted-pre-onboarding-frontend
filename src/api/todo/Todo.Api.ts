import customAxios from "../../lib/customAxios"
import { ModifyTodoParam } from "../../types/api/todo"
import { Todo } from "../../types/todo"

class TodoAPi {
    public async getTodos(): Promise<Todo[]> {
        const { data } = await customAxios.get("/todos")
        return data;
    }
    public async createTodo(todo: string): Promise<Todo> {
        const { data } = await customAxios.post("/todos", { todo })
        return data
    }

    public async modifyTodo({ todoId, todo, isCompleted }: ModifyTodoParam): Promise<Todo> {
        const { data } = await customAxios.put(`/todos/${todoId}`, {
            todo,
            isCompleted,
        });
        return data
    }

    public async deleteTodo(todoId: number): Promise<void> {
        const { data } = await customAxios.delete(`/todos/${todoId}`);
        return data;
    }

}


export default new TodoAPi()