import { getTodos, getTodosById } from "./todoapi";

export async function loadTodos() {
    const todos = await getTodos();
    return { todos };
}

export async function loadTodoById({ params }) {
    const todo = await getTodosById(params.id);
    return { todo };
}